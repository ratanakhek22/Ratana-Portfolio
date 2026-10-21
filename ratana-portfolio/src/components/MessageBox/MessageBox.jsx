import { useState } from 'react'
import styles from './MessageBox.module.css'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const FALLBACK_EMAIL = 'sovannratanakhek@gmail.com'
const EMPTY_FORM = { name: '', email: '', message: '' }

function MessageBox() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // editing after a result clears the old message
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    // Honeypot: real visitors never see or tick this box, bots often do.
    // Pretend it worked and skip the request entirely.
    const botcheck = new FormData(e.currentTarget).get('botcheck')
    if (botcheck) {
      setStatus('success')
      setFormData(EMPTY_FORM)
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
    if (!accessKey) {
      console.error('MessageBox: VITE_WEB3FORMS_KEY is not set (check your .env file).')
      setStatus('error')
      return
    }

    setStatus('sending')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio message from ${formData.name}`,
          from_name: 'Portfolio contact form',
          name: formData.name,
          email: formData.email, // Web3Forms uses this as the reply-to address
          message: formData.message,
        }),
        signal: controller.signal,
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFormData(EMPTY_FORM)
      } else {
        console.error('Web3Forms rejected the message:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Message failed to send:', err)
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  return (
    <div className={styles.messageBox} id="messageBox">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Who's this from?</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourEmail@example.com"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            required
          />
        </div>

        {/* honeypot: hidden from people and screen readers */}
        <input
          className={styles.honeypot}
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={styles.actions}>
          <button
            className={styles.sendBtn}
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send →'}
          </button>

          {status === 'success' && (
            <p className={`${styles.status} ${styles.statusSuccess}`} role="status">
              Message sent. Thanks, I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className={`${styles.status} ${styles.statusError}`} role="alert">
              Couldn't send that. Try again, or email me at{' '}
              <a className={styles.fallbackLink} href={`mailto:${FALLBACK_EMAIL}`}>
                {FALLBACK_EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default MessageBox
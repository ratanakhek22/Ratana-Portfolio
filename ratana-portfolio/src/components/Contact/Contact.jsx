import styles from './Contact.module.css'

const LINKS = [
  { label: 'Email', href: 'sovannratanakhek@gmail.com', display: 'sovannratanakhek@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/ratanakhek22', display: 'github.com/ratanakhek22' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/skhek/', display: 'www.linkedin.com/in/skhek/' },
]

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.blurb}>Open to opportunities — reach out any of these ways.</p>

      <ul className={styles.linkList}>
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
							className={styles.link}
							href={link.href}
							target={link.href.startsWith('http') ? '_blank' : undefined}
							rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						>
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.display}</span>
            </a>
          </li>
        ))}
      </ul>
      
      <a
        className={styles.resumeBtn}
        href="/files/SWE Resume Sovannratana Khek.pdf"
        download
			>
        {'↓ Download Resume'}
      </a>
    </section>
  )
}

export default Contact
import styles from './Contact.module.css'
import MessageBox from './../MessageBox/MessageBox'

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:sovannratanakhek@gmail.com', // fixed — was missing mailto:
    display: 'sovannratanakhek@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ratanakhek22',
    display: 'github.com/ratanakhek22',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skhek/',
    display: 'www.linkedin.com/in/skhek/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
]

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      {/* Left Flex Element */}
      <div className={styles.contentLeft}>
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
        
        <ul className={styles.iconList}>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                className={styles.iconLink}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
                >
                <span className={styles.icon}>{link.icon}</span>
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
      </div>

      {/* Dividing Flex Element */}
      <div className={styles.divideLine}/>

      {/* Right Flex Element */}
      <div className={styles.contentRight}>
        <MessageBox />
      </div>
    </section>
  )
}

export default Contact
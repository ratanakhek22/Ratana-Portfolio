import { useEffect, useState } from 'react'
import { usePortfolio } from '../../context/PortfolioProvider'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  { id: 'hero', label: '~/about-me' },
  { id: 'projects', label: '~/projects' },
  { id: 'console', label: '~/console' },
  { id: 'skills', label: '~/skills' },
  { id: 'experience', label: '~/experience' },
  { id: 'education', label: '~/education' },
  { id: 'contact', label: '~/contact' },
]

const ACTIVE_LINE = 0.35

function Nav() {
  const { isNavOpen, toggleNav, closeNav } = usePortfolio()
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    let ticking = false

    function computeActive() {
      const lineY = window.innerHeight * ACTIVE_LINE
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (scrolledToBottom && sections.length > 0) {
        setActiveId(sections[sections.length - 1].id)
        ticking = false
        return
      }

      let current = sections[0]?.id
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= lineY) current = section.id
      }

      if (current) setActiveId(current)
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(computeActive)
        ticking = true
      }
    }

    computeActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function handleNavClick(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <button
        className={styles.toggle}
        onClick={toggleNav}
        aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isNavOpen}
      >
        <span className={`${styles.bar} ${isNavOpen ? styles.barTopOpen : ''}`} />
        <span className={`${styles.bar} ${isNavOpen ? styles.barMidOpen : ''}`} />
        <span className={`${styles.bar} ${isNavOpen ? styles.barBottomOpen : ''}`} />
      </button>

      <div className={`${styles.panel} ${isNavOpen ? styles.panelOpen : ''}`}>
        <nav>
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${activeId === item.id ? styles.navLinkActive : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isNavOpen && <div className={styles.backdrop} onClick={closeNav} />}
    </>
  )
}

export default Nav
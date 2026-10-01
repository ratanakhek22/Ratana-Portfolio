import { useState } from 'react'
import { PROGRAM, EXPERIENCES } from '../../data/experience'
import styles from './Experience.module.css'

function Experience() {
  const [expanded, setExpanded] = useState(new Set())

  function toggleExpanded(pid) {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(pid) ? next.delete(pid) : next.add(pid)
      return next
    })
  }

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.intro}>
        <h3 className={styles.program}>{PROGRAM.name}</h3>
        <p className={styles.blurb}>{PROGRAM.blurb}</p>
      </div>

      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.terminalTitle}>guest@portfolio: ~/experience</span>
        </div>

        <div className={styles.terminalBody}>
          <p className={styles.promptLine}>
            <span className={styles.prompt}>guest@portfolio</span>
            <span className={styles.tilde}>:~$</span> ps aux
          </p>

          <div className={styles.tableHeader}>
            <span className={styles.colPid}>PID</span>
            <span className={styles.colStatus}>STATUS</span>
            <span className={styles.colCommand}>COMMAND</span>
            <span className={styles.colStarted}>STARTED</span>
            <span className={styles.colRuntime}>RUNTIME</span>
          </div>

          {EXPERIENCES.map((exp) => {
            const isOpen = expanded.has(exp.pid)
            return (
              <div key={exp.pid} className={styles.processGroup}>
                <button className={styles.processRow} onClick={() => toggleExpanded(exp.pid)}>
                  <span className={styles.colPid}>{exp.pid}</span>
                  <span className={`${styles.colStatus} ${styles[`status_${exp.status}`]}`}>
                    {exp.status}
                  </span>
                  <span className={styles.colCommand}>{exp.command}</span>
                  <span className={styles.colStarted}>{exp.started}</span>
                  <span className={styles.colRuntime}>{exp.runtime}</span>
                  <span className={styles.expandCaret}>{isOpen ? '▾' : '▸'}</span>
                </button>

                <div className={`${styles.detailWrapper} ${isOpen ? styles.detailWrapperOpen : ''}`}>
                  <div className={styles.detailInner}>
                    <div className={styles.detail}>
                      <p className={styles.detailCommand}>
                        $ ps aux -f {exp.pid} <span className={styles.detailRole}>({exp.role})</span>
                      </p>
                      <ul className={styles.bulletList}>
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
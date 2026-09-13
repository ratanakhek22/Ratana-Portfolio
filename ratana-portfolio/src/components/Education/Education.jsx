import { SCHOOL, MILESTONES } from '../../data/education'
import styles from './Education.module.css'

const STATUS_LABEL = {
  complete: 'done',
  'in-progress': 'in progress',
  upcoming: 'upcoming',
}

function Education() {
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.introRow}>
        <div className={styles.intro}>
          <h3 className={styles.school}>{SCHOOL.name}</h3>
          <p className={styles.program}>{SCHOOL.program}</p>
          <p className={styles.blurb}>
            I'm on a 4+1 co-terminal track, finishing both my bachelor's and master's in computer
            science in five years. Along the way I've picked up research experience, an
            independent certificate program, and a couple of side projects I kept working on
            outside of coursework.
            {/* Why CS, or why IIT specifically — a one-sentence "why" is often more memorable than describing the program structure itself
                What you're most proud of or excited about from the milestone list, called out explicitly rather than left purely to the timeline to convey
                Dropping the slightly formal "along the way I've picked up..." phrasing for something closer to how you'd actually describe it out loud */}
          </p>
        </div>

        <img src="/iit-logo.png" alt="Illinois Institute of Technology logo" className={styles.schoolLogo} />
      </div>

      <div className={styles.log}>
        <div className={styles.logBar}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.logTitle}>git log --oneline</span>
        </div>

        <div className={styles.logBody}>
          {MILESTONES.map((m) => (
            <div key={m.hash} className={styles.commit}>
              <span className={`${styles.statusDot} ${styles[`status_${m.status.replace('-', '')}`]}`} />
              <span className={styles.hash}>{m.hash}</span>
              <div className={styles.commitMain}>
                <div className={styles.commitTopRow}>
                  <span className={styles.commitTitle}>{m.title}</span>
                  <span className={styles.commitDate}>{m.date}</span>
                </div>
                <p className={styles.commitDesc}>{m.description}</p>
                <div className={styles.commitMeta}>
                  <span className={`${styles.statusTag} ${styles[`status_${m.status.replace('-', '')}`]}`}>
                    {STATUS_LABEL[m.status]}
                  </span>
                  {m.link && (
                    m.link.url ? (
                      <a href={m.link.url} className={styles.commitLink} target="_blank" rel="noreferrer">
                        {m.link.label} ↗
                      </a>
                    ) : (
                      <span className={styles.commitLinkPending}>{m.link.label}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
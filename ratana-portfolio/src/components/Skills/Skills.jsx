import { SKILLS } from '../../data/skills'
import { PROJECTS } from '../../data/projects'
import { getProjectsForSkill } from '../../utils/skillUtils'
import { usePortfolio } from '../../context/PortfolioProvider'
import styles from './Skills.module.css'

function Skills() {
  const { selectedSkills, selectSkill, selectSkillsForProject, clearSelectedSkills, skillsRef } = usePortfolio()
  const selectedList = SKILLS.filter((s) => selectedSkills.has(s.name))

  return (
    <section className={styles.skills} ref={skillsRef}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Skills</h2>
      </div>

      <div className={`${styles.content} ${selectedList.length > 0 ? styles.contentOpen : ''}`}>
        <div className={styles.pillBox}>
          {SKILLS.map((skill) => (
            <button
              key={skill.name}
              className={`${styles.pill} ${selectedSkills.has(skill.name) ? styles.pillActive : ''}`}
              onClick={() => selectSkill(skill.name)}
            >
              <p>{skill.name}</p>
            </button>
          ))}
        </div>

        <div className={`${styles.console} ${selectedList.length > 0 ? styles.consoleOpen : ''}`}>
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.dot} data-color="red" />
              <span className={styles.dot} data-color="yellow" />
              <span className={styles.dot} data-color="green" />
              <span className={styles.terminalTitle}>guest@portfolio: ~/skills</span>
              {selectedList.length > 0 && (
                <button className={styles.closeBtn} onClick={clearSelectedSkills} aria-label="Clear selection">
                  ✕
                </button>
              )}
            </div>

            <div className={styles.terminalBody}>
              {selectedList.length === 0 ? (
                <p className={styles.emptyState}>
                  <span className={styles.prompt}>guest@portfolio</span>
                  <span className={styles.tilde}>:~$</span> select a skill to view details
                </p>
              ) : (
                selectedList.map((skill) => {
                  const relatedProjects = getProjectsForSkill(skill.name, PROJECTS)
                  return (
                    <div key={skill.name} className={styles.skillBlock}>
                      <p className={styles.line}>
                        <span className={styles.prompt}>guest@portfolio</span>
                        <span className={styles.tilde}>:~/skills$</span> cat {skill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt
                      </p>
                      {skill.blurb && <p className={styles.blurb}>{skill.blurb}</p>}
                      <p className={styles.usedIn}>
                        used in: {relatedProjects.length === 0
                          ? 'no featured projects yet'
                          : relatedProjects.map((p) => p.title).join(', ')}
                      </p>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
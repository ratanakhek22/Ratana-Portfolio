import { PROJECTS } from '../../data/projects'
import { usePortfolio } from '../../context/PortfolioProvider'
import styles from './Projects.module.css'

function Projects() {
  const { runProject, selectSkillsForProject } = usePortfolio()

  function handleRun(project) {
    selectSkillsForProject(project, { scroll: false })
    runProject(project)
  }

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
        <span className={styles.hintText}>scroll for more ↓</span>
      </div>

      <div className={styles.scrollArea}>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader} onClick={() => handleRun(project)}>
                <span className={styles.dot} data-color="red" />
                <span className={styles.dot} data-color="yellow" />
                <span className={styles.dot} data-color="green" />
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardBlurb}>{project.blurb}</p>
                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <button
                      key={tech}
                      className={styles.tag}
                      onClick={() => selectSkillsForProject(project)}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <p className={styles.hint}>press to run a live demo in the console below</p>
                <button className={styles.runBtn} onClick={() => handleRun(project)}>
                  {'$ run →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
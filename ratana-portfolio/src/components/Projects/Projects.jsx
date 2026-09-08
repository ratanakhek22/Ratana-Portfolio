import { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioProvider'
import styles from './Projects.module.css'
import { PROJECTS } from '../../data/projects'

const PAGE_SIZE = 4

function Projects() {
  const { runProject, isRunning, selectSkillsForProject } = usePortfolio()

  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(PROJECTS.length / PAGE_SIZE)

  const visibleProjects = PROJECTS.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  )

  const paddedProjects = [
    ...visibleProjects,
    ...Array.from(
      { length: PAGE_SIZE - visibleProjects.length },
      (_, i) => ({ id: `placeholder-${i}`, placeholder: true })
    ),
  ]

  function goToPage(index) {
    if (index < 0 || index >= totalPages) return
    setPage(index)
  }

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
        {page !== 0 && (
          <button className={styles.backLink} onClick={() => goToPage(0)}>
            {'← back to page 1'}
          </button>
        )}
        <span className={styles.pageIndicator}>
          page {page + 1} of {totalPages}
        </span>
      </div>

      <div className={styles.container}>
        <button
          className={styles.arrowBtn}
          onClick={() => goToPage(page - 1)}
          disabled={page === 0}
          aria-label="Previous page"
        >
          {'<'}
        </button>

        <div className={styles.grid}>
          {paddedProjects.map((project) => 
            project.placeholder ? (
              <div key={project.id} className={styles.cardPlaceholder} />
            ) : (
              <div key={project.id} className={styles.card}>
                <h3 className={styles.cardTitle} onClick={() => {
                  selectSkillsForProject(project)
                  runProject(project)
                }}>
                  {project.title}
                </h3>
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
                <button
                  className={styles.runBtn}
                  onClick={() => runProject(project)}
                  disabled={isRunning}
                  >
                  {'$ run →'}
                </button>
                {page === 0 ? (
                  <p className={styles.hint}>press to run a live demo in the console below</p>
                ) : (<></>)}
              </div>
          ))}
        </div>

        <button
          className={styles.arrowBtn}
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages - 1}
          aria-label="Next page"
        >
          {'>'}
        </button>
      </div>
    </section>
  )
}

export default Projects
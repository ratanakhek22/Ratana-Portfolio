import { useState } from 'react'
import { useConsole } from '../ConsoleContext/ConsoleContext'
import styles from './Projects.module.css'

const PROJECTS = [
  { id: 1, key: 'hnswResearch', title: 'HNSW Insertion Research', blurb: 'A benchmarking tool comparing HNSW insertion methods for approximate nearest neighbor search. Tests recall, latency, and relevance tradeoffs across any BEIR datasets.', tech: ['Python', 'Batch'] },
  { id: 2, key: 'greenhouseSim', title: 'Greenhouse Temperature Simulation', blurb: 'A full-stack simulation tool for passive solar greenhouse design, pairing physics-based thermal calculations with an in-progress ML model for inverse design and predictive analysis.', tech: ['Python', 'FastAPI', 'React'] },
  { id: 3, key: 'parallelMPISort', title: 'Parallel Sorting with MPI', blurb: 'A parallel sorting benchmark in C using MPI, comparing blocking vs. nonblocking approaches across 6 processes with automated multi-run performance testing.', tech: ['C', 'Bash'] },
  { id: 4, key: 'oracleLens', title: 'Oracle Lens - AI Coach (Hackathon)', blurb: 'An AI coach for League of Legends that analyzes your first 10 minutes of gameplay via Riot API and AWS Bedrock, delivering role-aware, personalized feedback.', tech: ['AWS Bedrock', 'HTML/CSS', 'Python', 'Flask'] },
  { id: 5, key: 'lockStateMachine', title: 'Digital Lock State Machine', blurb: 'A digit-sequence lock simulator built as a finite-automaton state machine in Python, with a Tkinter GUI and a terminal-based brute-force tester for estimating break time.', tech: ['Python'] },
  { id: 6, key: 'budgetTracker', title: 'Chase Morgan Budget Tracker', blurb: 'A Django-based personal finance and budgeting web app with dedicated pages for tracking finances and spending categories.', tech: ['Django', 'SQL'] },
]

const PAGE_SIZE = 4

function Projects() {
  const { runProject, isRunning } = useConsole()

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
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardBlurb}>{project.blurb}</p>
                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <button
                  className={styles.runBtn}
                  onClick={() => runProject(project.key)}
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
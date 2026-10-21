import styles from './PortfolioPreview.module.css'
import PipelineDiagram from '../PipelineDiagram/PipelineDiagram'
import PdfPreview from '../Pdfpreview/Pdfpreview'

const stages = [
  { label: 'click project card', detail: 'runProject(project)' },
  { label: 'read project.script', detail: 'array of typed steps' },
  { label: 'step loop', detail: 'command · output · element · action' },
  { label: 'useConsoleState', detail: 'appends lines to state' },
  { label: 'console renders', detail: 'typed text + live previews', ok: true },
]

const decisions = [
  { name: 'Hybrid, not all-console', description: 'The console is one section; the rest is a conventional portfolio so it can be skimmed.' },
  { name: 'Single source of truth', description: 'Skill-to-project links are computed from each project\'s tech list, never stored twice.' },
  { name: 'Data-driven content', description: 'Projects, skills, education and experience live in plain data files that components render.' },
  { name: 'Real data in previews', description: 'Example outputs come from actually running the code, not invented numbers.' },
]

function PortfolioPreview() {
  return (
    <div className={styles.previewCard}>
      <h1 className={styles.project}>SWE Career Portfolio</h1>
      <p className={styles.content}>
        This site. Instead of a static project list, each project runs as a scripted demo in an on-page terminal, followed by an interactive preview built for that project. The console is one section of a conventional portfolio, so it can still be skimmed.
      </p>

      <PipelineDiagram stages={stages} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Decision</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map(({ name, description }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={styles.content}>
        Built with React and Vite, styled with CSS Modules and custom properties (no UI library), with shared state composed from small custom hooks. The contact form sends through Web3Forms, and the site is deployed on Vercel.
      </p>

      <PdfPreview
        pdfUrl="/portfolio/portfolio-readme.pdf"
        thumbnailUrl="/portfolio/readme-thumbnail.png"
        title="Read the project README"
      />

      <div className={styles.actions}>
        <a target="_blank" rel="noreferrer" href="https://github.com/ratanakhek22/Ratana-Portfolio" className={styles.primaryBtn}>GitHub Repo</a>
      </div>
    </div>
  )
}

export default PortfolioPreview

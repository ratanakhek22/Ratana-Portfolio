import PipelineDiagram from '../PipelineDiagram/PipelineDiagram'
import VideoPreview from '../Videopreview/Videopreview'
import styles from './OracleLensPreview.module.css'

// Pipeline stages come from the project's README + Devpost writeup.
const STAGES = [
  { label: 'summoner lookup', detail: 'name + tag input' },
  { label: 'riot league api', detail: 'pull recent match data' },
  { label: 'stat extraction', detail: 'laning-phase metrics' },
  { label: 'prompt injection', detail: 'claude 3.5 sonnet via aws bedrock' },
  { label: 'coaching review', detail: 'rendered via flask + jinja', ok: true },
]

const ROWS = [
  {
    label: 'match dashboard',
    value: 'Recent matches pulled from the Riot API, each with a one-click review button',
  },
  {
    label: 'ai coaching review',
    value: 'Laning-phase stats injected into a prompt for Claude 3.5 Sonnet via AWS Bedrock',
  },
  {
    label: 'leaderboard',
    value: 'Ranks players by their reviewed performance',
  },
  {
    label: 'roast mode',
    value: 'Same feedback, saltier delivery',
  },
  {
    label: 'summoner cache',
    value: 'Name and tag stored in cookies for faster return visits',
  },
  {
    label: 'status',
    value: 'Riot API and AWS Bedrock access have expired, so the hosted site is offline. The demo below is a recording.',
    warn: true,
  },
]

function OracleLensPreview() {
  return (
    <div className={`${styles.previewCard} ${styles.wrap}`}>
      <h1 className={styles.project}>Oracle Lens - AI Coach</h1>
      <p className={styles.content}>
        Built for the Rift Rewind Hackathon by IIT's varsity League of Legends
        team. Oracle Lens pulls a player's recent matches from the Riot API,
        extracts laning-phase stats, and has Claude 3.5 Sonnet turn them into
        a coaching review, the kind of feedback the team's own coach gives,
        automated.
      </p>

      <PipelineDiagram stages={STAGES} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>feature</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label} className={row.warn ? styles.rowWarn : ''}>
              <td className={styles.stageCell}>{row.label}</td>
              <td className={styles.metaCell}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <VideoPreview
        videoUrl="/oracle-lens/demo.mp4"
        thumbnailUrl="/oracle-lens/demo-thumbnail.png"
        title="Oracle Lens walkthrough"
      />

      <div className={styles.actions}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Davidonik/LoL-AI-Coach"
          className={styles.primaryBtn}
        >
          GitHub Repo
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://devpost.com/software/league-ai-placeholder"
          className={styles.primaryBtn}
        >
          Devpost
        </a>
      </div>
    </div>
  )
}

export default OracleLensPreview
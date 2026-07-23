// components/HnswPreview/HnswPreview.jsx
import styles from './ProjectPlaceholder.module.css'

function ProjectPlaceholder({ projectName, gitURL }) {
  return (
    <div className={styles.previewCard}>
      <h1 className={styles.project}>{projectName}</h1>
      <p className={styles.content}>
        TODO...
      </p>
      <p className={styles.content}>
        TODO...
      </p>

      {gitURL ? (          
        <div className={styles.actions}>
          <a target="_blank" href={gitURL} className={styles.primaryBtn}>GitHub Repo</a>
        </div>
      ) : <></>}
    </div>
  )
}

export default ProjectPlaceholder
// components/HnswPreview/HnswPreview.jsx
import styles from './HNSWResearch.module.css'

function HnswPreview() {
  return (
    <div className={styles.previewCard}>
      <h1 className={styles.project}>HNSW Insertion Research</h1>
      <p className={styles.content}>
        Research project investigating the effect of vector insertion ordering on HNSW graph quality for approximate nearest neighbor search. Five strategies are compared — random ordering, K-Means clustering, Hilbert curve ordering, LID-based ordering, and a K-Means LID approximation — evaluated on BEIR benchmark datasets using Recall@10 and NDCG@10 as primary quality metrics.
      </p>
      <p className={styles.content}>
        TODO More Yap...
      </p>

      <div className={styles.actions}>
        <a href="https://github.com/ratanakhek22/CS546_ResearchProject" className={styles.primaryBtn}>GitHub Repo</a>
      </div>
    </div>
  )
}

export default HnswPreview
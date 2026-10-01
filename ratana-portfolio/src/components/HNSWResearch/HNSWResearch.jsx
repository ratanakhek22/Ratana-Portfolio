import styles from './HNSWResearch.module.css'
import PdfPreview from '../Pdfpreview/Pdfpreview'

const strategies = [
  {
    name: 'Random',
    description: 'Vectors inserted in random order. Serves as the baseline.',
  },
  {
    name: 'K-Means',
    description: 'Cluster centroids inserted first, followed by cluster members.',
  },
  {
    name: 'Hilbert Curve',
    description: 'Vectors sorted by position along a Hilbert space-filling curve.',
  },
  {
    name: 'LID',
    description:
      'Vectors sorted by Local Intrinsic Dimensionality descending using MLE with k=100 neighbors. High LID vectors inserted first.',
  },
  {
    name: 'Density Approximation',
    description:
      'Vectors sorted by minimum distance to any k-means centroid descending. Approximates LID without O(n²) cost.',
  },
];

function HnswPreview() {
  return (
    <div className={styles.previewCard}>
      <h1 className={styles.project}>HNSW Insertion Research</h1>
      <p className={styles.content}>
        Research project investigating the effect of vector insertion ordering on HNSW graph quality for approximate nearest neighbor search. Five strategies are compared and evaluated with BEIR benchmark datasets using Recall@10 and NDCG@10 as primary quality metrics.
      </p>
      <table className={styles.insertionTable}>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map(({ name, description }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.content}>
        Developed as part of a graduate Parallel Computing course (CS 546) at Illinois Institute of Technology, this project was selected from a set of active research initiatives led by the course professor. I conducted the research under the mentorship of a PhD student with domain expertise, gaining hands-on guidance throughout the process.
      </p>

      <PdfPreview
        pdfUrl="/HNSW/CS_546___HNSW_Insertion_Research_Report.pdf"
        thumbnailUrl="/HNSW/research-paper-thumbnail.png"
        title="Read the full research paper"
      />

      <div className={styles.actions}>
        <a target="_blank" href="https://github.com/ratanakhek22/CS546_ResearchProject" className={styles.primaryBtn}>GitHub Repo</a>
      </div>
    </div>
  )
}

export default HnswPreview
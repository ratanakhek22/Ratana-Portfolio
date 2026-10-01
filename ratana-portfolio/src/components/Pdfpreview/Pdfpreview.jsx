import { useState } from 'react'
import styles from './Pdfpreview.module.css'

function PdfPreview({ pdfUrl, thumbnailUrl, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button className={styles.previewButton} onClick={() => setIsOpen(true)}>
        <img src={thumbnailUrl} alt={`${title} preview`} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <span className={styles.overlayText}>📄 {title}</span>
          <span className={styles.overlayHint}>click to preview</span>
        </div>
      </button>

      {isOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{title}</span>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close preview">
                ✕
              </button>
            </div>

            <iframe src={pdfUrl} title={title} className={styles.pdfFrame} />

            <div className={styles.modalFooter}>
              <a href={pdfUrl} download className={styles.downloadBtn}>
                download PDF ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PdfPreview
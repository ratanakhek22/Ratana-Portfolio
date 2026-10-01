import { useState } from 'react'
import styles from './Videopreview.module.css'

// Mirrors PdfPreview's structure exactly: a crisp thumbnail with a text
// overlay panel (not a blurred image), opening a modal — here with a
// playable <video> instead of a pdf iframe, and a download button in the
// footer instead of a download link.
function VideoPreview({ videoUrl, thumbnailUrl, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <button className={styles.previewButton} onClick={() => setIsOpen(true)}>
        <img src={thumbnailUrl} alt={`${title} preview`} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <span className={styles.overlayText}>▶ {title}</span>
          <span className={styles.overlayHint}>click to play</span>
        </div>
      </button>

      {isOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{title}</span>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <video
              src={videoUrl}
              controls
              playsInline
              className={styles.videoPlayer}
            />

            <div className={styles.modalFooter}>
              <a href={videoUrl} download className={styles.downloadBtn}>
                download video ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPreview
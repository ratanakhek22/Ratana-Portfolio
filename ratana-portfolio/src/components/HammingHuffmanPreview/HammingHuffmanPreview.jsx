import { useState } from 'react'
import PipelineDiagram from './PipelineDiagram'
import VideoPreview from '../Videopreview/Videopreview'
import styles from './HammingHuffmanPreview.module.css'

// Real output captured from running hamming.py / huffman.py / pipeline.py
// on the sample message "test message for demo" — not fabricated.
const STEPS = [
  {
    label: 'original message',
    value: 'test message for demo',
    meta: '21 chars · 168 bits as raw ASCII',
  },
  {
    label: 'huffman-encoded',
    value: '1101001011101100111100101101011001110010001011110110010001000011111110',
    meta: '70 bits — 58% smaller than raw ASCII',
    truncate: true,
  },
  {
    label: 'hamming-encoded',
    value:
      '100001110001001010001001100000001100010011000000110000001100010101100000011000100110001001100010011000000110001001100010011000010011000000110001001100010011000100110001001100000011000000110001001100000011000100110001001100000011000100110000001100010011000010011000000110000001100010011000100110001001100000011000000110001001100000011000000110000001100010011000000110001001100010011000100110001001100000011000100110001001100000011000000110001001100000011000000110000001100010011000000110000001100000011000000110010100110001001100010011000100110001001100010011000100110000',
    meta: '570 bits — 560 data bits + 10 parity bits',
    truncate: true,
  },
  {
    label: 'bit-flip error @ index 3',
    value:
      '100101110001001010001001100000001100010011000000110000001100010101100000011000100110001001100010011000000110001001100010011000010011000000110001001100010011000100110001001100000011000000110001001100000011000100110001001100000011000100110000001100010011000010011000000110000001100010011000100110001001100000011000000110001001100000011000000110000001100010011000000110001001100010011000100110001001100000011000100110001001100000011000000110001001100000011000000110000001100010011000000110000001100000011000000110010100110001001100010011000100110001001100010011000100110000',
    meta: 'simulated transmission noise — a single bit flipped',
    truncate: true,
    warn: true,
  },
  {
    label: 'decoded message',
    value: 'test message for demo',
    meta: 'hamming correction + huffman decode — exact match ✓',
    ok: true,
  },
]

function truncateBits(bits, len = 36) {
  return bits.length > len ? `${bits.slice(0, len)}…` : bits
}

function HammingHuffmanPreview() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className={`${styles.previewCard} ${styles.wrap}`}>
      <h1 className={styles.project}>Self-Correcting Compression Pipeline</h1>
      <p className={styles.content}>
        A message is compressed with Huffman coding, then wrapped in a Hamming
        code for single-bit error correction. A bit flip is simulated in
        transit, and the pipeline detects and repairs it before decoding resulting in
        no data loss.
      </p>

      <PipelineDiagram />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>stage</th>
            <th>value</th>
            <th>notes</th>
          </tr>
        </thead>
        <tbody>
          {STEPS.map((step) => {
            const isLong = step.truncate && step.value.length > 36
            const isOpen = expanded === step.label
            return (
              <tr
                key={step.label}
                className={[
                  step.warn ? styles.rowWarn : '',
                  step.ok ? styles.rowOk : '',
                ].join(' ')}
              >
                <td className={styles.stageCell}>{step.label}</td>
                <td className={styles.valueCell}>
                  <code>
                    {isLong && !isOpen ? truncateBits(step.value) : step.value}
                  </code>
                  {isLong && (
                    <button
                      className={styles.toggleBtn}
                      onClick={() =>
                        setExpanded(isOpen ? null : step.label)
                      }
                    >
                      {isOpen ? 'show less' : 'show full'}
                    </button>
                  )}
                </td>
                <td className={styles.metaCell}>{step.meta}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <VideoPreview
        videoUrl="/hamming-huffman/demo.mp4"
        thumbnailUrl="/hamming-huffman/demo-thumbnail.png"
        title="Notebook walkthrough"
      />

      <div className={styles.actions}>
        <a target="_blank" href="https://github.com/ratanakhek22/" className={styles.primaryBtn}>GitHub Repo</a>
      </div>
    </div>
  )
}

export default HammingHuffmanPreview
import styles from './PipelineDiagram.module.css'

const STAGES = [
  { label: 'message', detail: '"test message for demo"' },
  { label: 'huffman encode', detail: 'compress → 70 bits' },
  { label: 'hamming encode', detail: 'add parity → 570 bits' },
  { label: 'bit-flip error', detail: 'simulated transmission noise', warn: true },
  { label: 'hamming decode', detail: 'detects + corrects the flipped bit' },
  { label: 'huffman decode', detail: 'decompress' },
  { label: 'message recovered', detail: '"test message for demo"', ok: true },
]

function PipelineDiagram() {
  return (
    <div className={styles.diagram}>
      {STAGES.map((stage, i) => (
        <div className={styles.stageWrap} key={stage.label}>
          <div
            className={[
              styles.stage,
              stage.warn ? styles.stageWarn : '',
              stage.ok ? styles.stageOk : '',
            ].join(' ')}
          >
            <span className={styles.stageLabel}>{stage.label}</span>
            <span className={styles.stageDetail}>{stage.detail}</span>
          </div>
          {i < STAGES.length - 1 && <span className={styles.arrow}>→</span>}
        </div>
      ))}
    </div>
  )
}

export default PipelineDiagram
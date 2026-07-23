import { useConsole } from './../ConsoleContext/ConsoleContext'
import styles from './Console.module.css'

function Console() {
  const { lines, consoleRef, currentPath } = useConsole()

  return (
    <section className={styles.console} ref={consoleRef}>
      <div className={styles.terminalColumn}>
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
            <span className={styles.terminalTitle}>guest@portfolio: {currentPath}</span>
          </div>

          <div className={styles.terminalBody}>
            {lines.map((line, i) => {
              const isLast = i === lines.length - 1
              if (line.type === 'command') {
                return (
                  <p className={styles.line} key={i}>
                    <span className={styles.prompt}>guest@portfolio</span>
                    <span className={styles.tilde}>:{line.path}$</span>
                    <span>{line.text}</span>
                    {isLast && <span className={styles.cursor}>_</span>}
                  </p>
                )
              } 
              if (line.type === 'element') {
                return (
                  <div className={styles.outputBlock} key={i}>
                    {line.content}
                  </div>
                )
              }
              return (
                <p className={styles.line} key={i}>
                  {line.text}
                </p>
              )
            })}

            {lines.length === 0 && (
              <p className={styles.line}>
                <span className={styles.prompt}>guest@portfolio</span>
                <span className={styles.tilde}>:{currentPath}$</span>
                <span className={styles.cursor}>_</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Console
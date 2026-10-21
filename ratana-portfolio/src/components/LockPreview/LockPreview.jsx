import { useEffect, useRef, useState } from 'react'
import { createLock, checkDigit, simulateBreak } from './lockLogic'
import styles from './LockPreview.module.css'

// States of the finite automaton, in order. lock.index (0-5) is how many
// digits of 80771 have matched so far, so it doubles as "which node is active".
const NODES = ['start', '8', '0', '7', '7', '1']

// Result of the original 70-iteration run of tester.py (see the repo screenshot).
const PYTHON_RUN = { trials: 70, lowest: 1976, highest: 7896278, average: 1128084 }

const TRIAL_OPTIONS = [10, 25, 50]
const MAX_SHOWN = 24

const fmt = (n) => Math.round(n).toLocaleString()

function LockPreview() {
  const [lock, setLock] = useState(createLock)
  const [typed, setTyped] = useState('')
  const [trials, setTrials] = useState(25)
  const [sim, setSim] = useState({ running: false, result: null })
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  function feed(digits) {
    if (!digits) return
    setLock((prev) => [...digits].reduce((s, c) => checkDigit(s, Number(c)), prev))
    setTyped((prev) => (prev + digits).slice(-MAX_SHOWN))
  }

  // Non-digit input is ignored, like the Tkinter version. Backspace edits the
  // visible text but never re-feeds a digit to the lock.
  function handleChange(e) {
    const { data, inputType = '' } = e.nativeEvent
    const raw = e.target.value
    if (inputType.startsWith('delete')) {
      setTyped(raw.replace(/\D/g, ''))
      return
    }
    const inserted = data ?? raw.slice(typed.length) // paste has no `data`
    feed(inserted.replace(/\D/g, ''))
  }

  function playSequence(seq) {
    timers.current.forEach(clearTimeout)
    timers.current = [...seq].map((c, i) =>
      setTimeout(() => feed(c), i * 220)
    )
  }

  function reset() {
    timers.current.forEach(clearTimeout)
    setLock(createLock())
    setTyped('')
  }

  function runSimulation() {
    setSim({ running: true, result: null })
    // let the "running" state paint before the (synchronous) number crunching
    setTimeout(() => {
      let total = 0
      let lowest = Infinity
      let highest = 0
      for (let i = 0; i < trials; i++) {
        const n = simulateBreak()
        total += n
        lowest = Math.min(lowest, n)
        highest = Math.max(highest, n)
      }
      setSim({
        running: false,
        result: { trials, lowest, highest, average: total / trials },
      })
    }, 30)
  }

  const armed = lock.index === NODES.length - 1

  return (
    <div className={`${styles.previewCard} ${styles.wrap}`}>
      <h1 className={styles.project}>Digital Lock State Machine</h1>
      <p className={styles.content}>
        A lock modeled as a finite automaton: typing 80771 arms it, then a 1
        unlocks it and a 4 locks it. Any wrong digit sends it back to the
        start. It was a CS 330 assignment written in Python with a Tkinter
        GUI. The same state machine runs below, ported to JavaScript.
      </p>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>try it</span>
          <span
            className={`${styles.badge} ${
              lock.unlocked ? styles.badgeOpen : styles.badgeShut
            }`}
          >
            {lock.unlocked ? 'unlocked' : 'locked'}
          </span>
        </div>

        <input
          className={styles.entry}
          value={typed}
          onChange={handleChange}
          inputMode="numeric"
          autoComplete="off"
          spellCheck={false}
          placeholder="type digits here…"
          aria-label="Enter digits into the lock"
        />

        <div className={styles.track} aria-label="State machine position">
          {NODES.map((label, i) => (
            <div className={styles.trackItem} key={i}>
              <span
                className={`${styles.node} ${
                  i === lock.index ? styles.nodeActive : ''
                } ${i < lock.index ? styles.nodePassed : ''}`}
              >
                {label}
              </span>
              {i < NODES.length - 1 && <span className={styles.arrow}>→</span>}
            </div>
          ))}
        </div>

        <p className={styles.hint}>
          {armed
            ? 'armed — the next digit decides: 1 unlocks, 4 locks.'
            : '807711 unlocks · 807714 locks · non-digits are ignored'}
        </p>

        <div className={styles.controls}>
          <button type="button" className={styles.ghostBtn} onClick={() => playSequence('807711')}>
            enter 807711
          </button>
          <button type="button" className={styles.ghostBtn} onClick={() => playSequence('807714')}>
            enter 807714
          </button>
          <button type="button" className={styles.ghostBtn} onClick={reset}>
            reset
          </button>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>intruder simulation</span>
        </div>
        <p className={styles.hint}>
          Feeds random digits into a locked lock until it opens, then reports how
          many inputs that took. Expect around a million per break-in.
        </p>

        <div className={styles.controls}>
          <label className={styles.selectLabel}>
            trials
            <select
              className={styles.select}
              value={trials}
              onChange={(e) => setTrials(Number(e.target.value))}
              disabled={sim.running}
            >
              {TRIAL_OPTIONS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={runSimulation}
            disabled={sim.running}
          >
            {sim.running ? 'running…' : 'run simulation'}
          </button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>run</th>
              <th>trials</th>
              <th>lowest</th>
              <th>highest</th>
              <th>average</th>
            </tr>
          </thead>
          <tbody>
            {sim.result && (
              <tr>
                <td className={styles.stageCell}>this browser</td>
                <td>{sim.result.trials}</td>
                <td>{fmt(sim.result.lowest)}</td>
                <td>{fmt(sim.result.highest)}</td>
                <td>{fmt(sim.result.average)}</td>
              </tr>
            )}
            <tr>
              <td className={styles.stageCell}>my original run (python)</td>
              <td>{PYTHON_RUN.trials}</td>
              <td>{fmt(PYTHON_RUN.lowest)}</td>
              <td>{fmt(PYTHON_RUN.highest)}</td>
              <td>{fmt(PYTHON_RUN.average)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure className={styles.figure}>
        <img
          className={styles.diagram}
          src="/digital-lock/state-machine.png"
          alt="State machine diagram: start, 8, 0, 7, 7, 1, then 1 unlocks and 4 locks; any other digit returns to start"
        />
        <figcaption className={styles.caption}>
          The state machine diagram from the original assignment.
        </figcaption>
      </figure>

      <div className={styles.actions}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ratanakhek22/CS330SecurityLock"
          className={styles.primaryLink}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  )
}

export default LockPreview

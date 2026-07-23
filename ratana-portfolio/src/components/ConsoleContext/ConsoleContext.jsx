// ConsoleContext.jsx
import { createContext, useContext, useRef, useState, useCallback } from 'react'
import { projectScripts } from './../../data/projectScripts'
import styles from './ConsoleContext.module.css'

const ConsoleContext = createContext(null)

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function typeCommand(text, setLines) {
  return new Promise((resolve) => {
    let i = 0
    setLines((prev) => [...prev, { type: 'command', text: '' }])

    const interval = setInterval(() => {
      i++
      setLines((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = { type: 'command', text: text.slice(0, i) }
        return updated
      })

      if (i >= text.length) {
        clearInterval(interval)
        resolve()
      }
    }, 25)
  })
}

export function ConsoleProvider({ children }) {
  const [lines, setLines] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const consoleRef = useRef(null)

  const runProject = useCallback(async (projectKey) => {
    const steps = projectScripts[projectKey]
    if (!steps || isRunning) return

    setIsRunning(true)
    setLines([])
    consoleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    for (const step of steps) {
      switch (step.type) {
        case 'command':
          await typeCommand(step.text, setLines)
          await wait(150) // small pause after typing, feels natural
          break
        case 'output':
          setLines((prev) => [...prev, { type: 'output', text: step.text }])
          break
        case 'element':
          setLines((prev) => [...prev, { type: 'element', content: step.content }])
          break
        case 'action':
          await step.run()
          break
        default:
          break
      }
    }

    setIsRunning(false)
  }, [isRunning])

  return (
    <ConsoleContext.Provider value={{ lines, runProject, isRunning, consoleRef }}>
      {children}
    </ConsoleContext.Provider>
  )
}

export function useConsole() {
  const ctx = useContext(ConsoleContext)
  if (!ctx) throw new Error('useConsole must be used within a ConsoleProvider')
  return ctx
}

export default ConsoleProvider
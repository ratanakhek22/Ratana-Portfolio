import { useRef, useState, useCallback } from 'react'
import { wait, typeCommand } from "../utils/ConsoleUtils"

export function useConsoleState() {
  const [lines, setLines] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const consoleRef = useRef(null)
  
  const [currentPath, setCurrentPath] = useState('~')
  const currentPathRef = useRef('~') // tracks the real-time value for use inside the loop
  
  const runProject = useCallback(async (project) => {
    const steps = project.script
    if (!steps) {
      console.warn(`No script defined for project: ${project.title}`)
      return
    }
    if (!steps || isRunning) return
    
    setIsRunning(true)
    setLines([])
    setCurrentPath('~')
    currentPathRef.current = '~' // reset ref alongside state
    consoleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    
    for (const step of steps) {
      switch (step.type) {
        case 'command':
          await typeCommand(step.text, currentPathRef.current, setLines) // read from ref, not state
          if (step.text.startsWith('cd ')) {
            const target = step.text.slice(3).trim()
            const newPath = target.startsWith('~') ? target : `~/${target}`
            currentPathRef.current = newPath // update ref immediately
            setCurrentPath(newPath) // update state for rendering (terminal bar, empty prompt)
          }
          await wait(150)
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
            
  return { lines, runProject, isRunning, consoleRef, currentPath }
}
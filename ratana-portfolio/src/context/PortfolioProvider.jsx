import { createContext, useContext, useRef, useState, useCallback } from 'react'
import { useConsoleState } from '../hooks/useConsoleState.js'
import { useSkillsState } from '../hooks/useSkillsState.js'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const consoleState = useConsoleState()
  const skillsState = useSkillsState()

  return (
    <PortfolioContext.Provider value={{ ...consoleState, ...skillsState }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used within a PortfolioProvider')
  return ctx
}

export default PortfolioProvider
import { createContext, useContext } from 'react'
import { useConsoleState } from '../hooks/useConsoleState'
import { useSkillsState } from '../hooks/useSkillsState'
import { useNavState } from '../hooks/useNavState'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const consoleState = useConsoleState()
  const skillsState = useSkillsState()
  const navState = useNavState()

  return (
    <PortfolioContext.Provider value={{ ...consoleState, ...skillsState, ...navState }}>
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
import { useState, useCallback } from 'react'

export function useNavState() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openNav = useCallback(() => setIsNavOpen(true), [])
  const closeNav = useCallback(() => setIsNavOpen(false), [])
  const toggleNav = useCallback(() => setIsNavOpen((prev) => !prev), [])

  return { isNavOpen, openNav, closeNav, toggleNav }
}
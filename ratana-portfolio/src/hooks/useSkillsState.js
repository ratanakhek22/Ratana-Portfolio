import { useState, useCallback, useRef } from 'react'

export function useSkillsState() {
  const [selectedSkills, setSelectedSkills] = useState(new Set())
  const skillsRef = useRef(null)

  const selectSkillsForProject = useCallback((project) => {
    setSelectedSkills(new Set(project.tech))
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const selectSkill = useCallback((skillName) => {
    setSelectedSkills((prev) => {
    if (prev.size === 1 && prev.has(skillName)) return new Set()
    return new Set([skillName])
    })
  }, [])

  const clearSelectedSkills = useCallback(() => {
    setSelectedSkills(new Set())
  }, [])

  return { selectedSkills, selectSkill, selectSkillsForProject, clearSelectedSkills, skillsRef  }
}
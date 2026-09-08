// utils/skillUtils.js

export function getProjectsForSkill(skillName, projects) {
  return projects.filter((p) => p.tech.includes(skillName))
}

// Groups SKILLS by category, preserving the order skills appear in the array.
export function groupSkillsByCategory(skills) {
  const groups = {}
  for (const skill of skills) {
    if (!groups[skill.category]) groups[skill.category] = []
    groups[skill.category].push(skill)
  }
  return groups
}

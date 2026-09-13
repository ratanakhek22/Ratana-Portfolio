export const SCHOOL = {
  name: 'Illinois Institute of Technology',
  program: 'B.S. + M.S. Computer Science (4+1 co-terminal)',
  expectedGrad: 'Fall 2026',
}

// status: 'complete' | 'in-progress' | 'upcoming'
export const MILESTONES = [
  {
    hash: 'a3f9c21',
    date: 'Fall 2024',
    title: "Dean's List — College of Computing",
    description: 'Recognized for academic performance within the College of Computing.',
    status: 'complete',
    link: { label: 'view certificate', url: '/DC-Khek.pdf' },
  },
  {
    hash: '7b2e881',
    date: 'Spring 2026',
    title: 'HNSW Insertion Research',
    description: 'Parallel programming research project on HNSW insertion methods, guided by a graduate student researcher.',
    status: 'complete',
  },
  {
    hash: 'e91d4f0',
    date: 'Fall 2026',
    title: 'Started MIT Data Science & AI Program',
    description: 'Online program covering data science and applied AI, with a capstone project due by the end of the semester.',
    status: 'in-progress',
  },
  {
    hash: '4d2c9a1',
    date: 'Fall 2026',
    title: 'Cobblemon Modpack (personal project)',
    description: 'An independent Java-based Minecraft modpack, currently in testing ahead of a public release.',
    status: 'in-progress',
    link: { label: 'listing (pending release)', url: null },
  },
  {
    hash: '9f0b3e2',
    date: 'Fall 2026',
    title: 'Graduating — B.S. + M.S. Computer Science',
    description: 'Completing the 4+1 co-terminal program at Illinois Institute of Technology.',
    status: 'upcoming',
  },
]
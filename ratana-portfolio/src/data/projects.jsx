import HnswPreview from '../components/HNSWResearch/HNSWResearch'
import ProjectPlaceholder from '../components/ProjectPlaceholder/ProjectPlaceholder'

export const PROJECTS = [
  {
    id: 1,
    key: 'hnswResearch',
    title: 'HNSW Insertion Research',
    blurb: 'A benchmarking tool comparing HNSW insertion methods for approximate nearest neighbor search. Tests recall, latency, and relevance tradeoffs across any BEIR datasets.',
    tech: ['Python', 'Batch'],
    script: [
      { type: 'command', text: 'cd Projects/hnswResearch' },
      { type: 'command', text: 'info hnswResearch' },
      { type: 'element', content: <HnswPreview /> },
      { type: 'command', text: 'run hnswResearch' },
      { type: 'output', text: 'Opening in new tab ↗' },
      { type: 'action', run: () => window.open('demos/fiqa_2026-05-01_17-29-01.html', '_blank') },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 2,
    key: 'greenhouseSim',
    title: 'Greenhouse Temperature Simulation',
    blurb: 'A full-stack simulation tool for passive solar greenhouse design, pairing physics-based thermal calculations with an in-progress ML model for inverse design and predictive analysis.',
    tech: ['Python', 'FastAPI', 'React'],
    script: [
      { type: 'command', text: 'cd Projects/greenhouseSim' },
      { type: 'command', text: 'info greenhouseSim' },
      { type: 'element', content: <ProjectPlaceholder projectName="Greenhouse Temperature Simulation" gitURL="https://github.com/ratanakhek22/Solar-Greenhouse" /> },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 3,
    key: 'parallelMPISort',
    title: 'Parallel Sorting with MPI',
    blurb: 'A parallel sorting benchmark in C using MPI, comparing blocking vs. nonblocking approaches across 6 processes with automated multi-run performance testing.',
    tech: ['C', 'Bash'],
    script: [
      { type: 'command', text: 'cd Projects/parallelMPISort' },
      { type: 'command', text: 'info parallelMPISort' },
      { type: 'element', content: <ProjectPlaceholder projectName="Parallel Sorting with MPI" /> },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 4,
    key: 'oracleLens',
    title: 'Oracle Lens - AI Coach (Hackathon)',
    blurb: 'An AI coach for League of Legends that analyzes your first 10 minutes of gameplay via Riot API and AWS Bedrock, delivering role-aware, personalized feedback.',
    tech: ['AWS Bedrock', 'HTML/CSS', 'Python', 'Flask'],
    script: [
      { type: 'command', text: 'cd Projects/oracleLens' },
      { type: 'command', text: 'info oracleLens' },
      { type: 'element', content: <ProjectPlaceholder projectName="Oracle Lens - AI Coach (Hackathon)" gitURL="https://github.com/ratanakhek22/OracleLens" /> },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 5,
    key: 'lockStateMachine',
    title: 'Digital Lock State Machine',
    blurb: 'A digit-sequence lock simulator built as a finite-automaton state machine in Python, with a Tkinter GUI and a terminal-based brute-force tester for estimating break time.',
    tech: ['Python'],
    script: null, // TODO: add demo script
  },
  {
    id: 6,
    key: 'budgetTracker',
    title: 'Chase Morgan Budget Tracker',
    blurb: 'A Django-based personal finance and budgeting web app with dedicated pages for tracking finances and spending categories.',
    tech: ['Django', 'SQL'],
    script: null, // TODO: add demo script
  },
]
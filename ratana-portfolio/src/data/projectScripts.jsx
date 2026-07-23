import HnswPreview from './../components/HNSWResearch/HNSWResearch'
import ProjectPlaceholder from './../components/ProjectPlaceholder/ProjectPlaceholder'

export const projectScripts = {
  hnswResearch: [
    { type: 'command', text: 'cd Projects/hnswResearch' },
    { type: 'command', text: 'info hnswResearch' },
    { type: 'element', content: <HnswPreview />},
    { type: 'command', text: 'run hnswResearch' },
    { type: 'output', text: 'Opening in new tab ↗' },
    { type: 'action', run: () => window.open('demos/fiqa_2026-05-01_17-29-01.html', '_blank') },
    { type: 'command', text: 'clear' },
  ],
  greenhouseSim: [
    { type: 'command', text: 'cd Projects/greenhouseSim' },
    { type: 'command', text: 'info greenhouseSim' },
    { type: 'element', content: <ProjectPlaceholder projectName='Greenhouse Temperature Simulation' gitURL='https://github.com/ratanakhek22/Solar-Greenhouse' />},
    { type: 'command', text: 'clear' },
  ],
  parallelMPISort: [
    { type: 'command', text: 'cd Projects/parallelMPISort' },
    { type: 'command', text: 'info parallelMPISort' },
    { type: 'element', content: <ProjectPlaceholder projectName='Parallel Sorting with MPI' />},
    { type: 'command', text: 'clear' },
  ],
  oracleLens: [
    { type: 'command', text: 'cd Projects/oracleLens' },
    { type: 'command', text: 'info oracleLens' },
    { type: 'element', content: <ProjectPlaceholder projectName='Oracle Lens - AI Coach (Hackathon)' gitURL='https://github.com/ratanakhek22/OracleLens'/>},
    { type: 'command', text: 'clear' },
  ]
}
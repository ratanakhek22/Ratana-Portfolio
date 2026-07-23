import HnswPreview from './../components/HNSWResearch/HNSWResearch'

export const projectScripts = {
  hnswResearch: [
    { type: 'command', text: 'cd Projects/hnswResearch' },
    { type: 'command', text: 'info hnswResearch' },
    { type: 'element', content: <HnswPreview />},
    { type: 'command', text: 'run hnswResearch' },
    { type: 'output', text: 'Opening in new tab ↗' },
    { type: 'action', run: () => window.open('demos/fiqa_2026-05-01_17-29-01.html', '_blank') },
    { type: 'command', text: 'clear' },
    // { type: 'output', text: 'Opening in new tab ↗' },
    // { type: 'action', run: () => window.open('https://github.com/ratanakhek22/CS546_ResearchProject', '_blank') },
  ],
}
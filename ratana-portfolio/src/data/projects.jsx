import HnswPreview from '../components/HNSWResearch/HNSWResearch'
import ProjectPlaceholder from '../components/ProjectPlaceholder/ProjectPlaceholder'
import HammingHuffmanPreview from '../components/HammingHuffmanPreview/HammingHuffmanPreview'
import OracleLensPreview from '../components/OracleLensPreview/OracleLensPreview'
import LockPreview from '../components/LockPreview/LockPreview'

export const PROJECTS = [
  {
    id: 1,
    key: 'hnswResearch',
    title: 'HNSW Insertion Research',
    blurb: 'Benchmarked five HNSW insertion strategies — including an original density-based approximation — across BEIR datasets to measure how insertion order affects graph quality. Random ordering held up best overall, with the new method matching it at a fraction of the computational cost.',
    tech: ['Python', 'Batch', 'Git', 'HTML/CSS'],
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
    key: 'hammingHuffmanPipeline',
    title: 'Self-Correcting Compression Pipeline',
    blurb:
      'A Huffman compression stage feeds into a Hamming error-correcting code, so a message can be compressed and still survive a single-bit transmission error without any data loss. This is done by the decoder detect ingand repairing the flipped bit before decompressing.',
    tech: ['Python'],
    script: [
      { type: 'command', text: 'cd Projects/hammingHuffmanPipeline' },
      { type: 'command', text: 'python pipeline.py' },
      { type: 'output', text: 'Original Message: test message for demo' },
      {
        type: 'output',
        text: 'huffman encoding: 1101001011101100111100101101011001110010001011110110010001000011111110',
      },
      {
        type: 'output',
        text: 'Encoded Message: 100001110001001010001001100000...  (570 bits)',
      },
      { type: 'command', text: 'simulate --bit-flip --index 3' },
      {
        type: 'output',
        text: 'Encoded Message with error at index 3: 100101110001001010001001100000...',
      },
      { type: 'command', text: 'pipeline_decode(encoded_msg, codebook)' },
      { type: 'output', text: 'Decoded Message: test message for demo' },
      { type: 'output', text: 'match: True' },
      { type: 'command', text: 'info hammingHuffmanPipeline' },
      { type: 'element', content: <HammingHuffmanPreview /> },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 3,
    key: 'portfolio',
    title: 'SWE Career Portfolio',
    blurb: "This very site: a console-themed developer portfolio built to showcase backend/systems work to a technical audience. Combines a terminal-style project runner, a derived-state skills graph, and a handful of deliberately over-engineered UI details.",
    tech: ['React', 'Vite', 'JavaScript', 'JavaScript XML', 'Vercel', 'HTML/CSS', 'Git'],
    script: [
      { type: 'command', text: 'cd Projects/portfolio' },
      { type: 'command', text: 'info portfolio' },
      { type: 'element', content: <ProjectPlaceholder projectName="SWE Career Portfolio" /> },
      { type: 'command', text: 'clear' },
    ],
  },
  {
    id: 4,
    key: 'oracleLens',
    title: 'Oracle Lens - AI Coach (Hackathon)',
    blurb:
      'An AI coach for League of Legends that analyzes your first 10 minutes of gameplay via Riot API and AWS Bedrock, delivering role-aware, personalized feedback.',
    tech: ['AWS Bedrock', 'HTML/CSS', 'Python', 'Flask', 'Git'],
    script: [
      { type: 'command', text: 'cd Projects/oracleLens' },
      { type: 'command', text: 'cat devpost.md' },
      { type: 'output', text: 'Rift Rewind Hackathon — IIT varsity League of Legends team' },
      { type: 'output', text: 'Riot API + Claude 3.5 Sonnet (AWS Bedrock).' },
      { type: 'command', text: 'curl riotapi.com/lol/match/v5' },
      { type: 'output', text: 'Error: 401 Unauthorized — API key expired' },
      { type: 'command', text: 'info oracleLens' },
      { type: 'element', content: <OracleLensPreview /> },
    ],
  },
  {
    id: 5,
    key: 'lockStateMachine',
    title: 'Digital Lock State Machine',
    blurb:
      'A digit-sequence lock simulator built as a finite-automaton state machine in Python, with a Tkinter GUI and a terminal-based brute-force tester for estimating break time.',
    tech: ['Python', 'Git'],
    script: [
      { type: 'command', text: 'cd Projects/digitalLock' },
      { type: 'command', text: 'python tester.py' },
      { type: 'output', text: 'How many iterations do you want to test?' },
      { type: 'output', text: '70' },
      { type: 'output', text: 'Highest input count: 7896278' },
      { type: 'output', text: 'Lowest input count: 1976' },
      { type: 'output', text: 'Average inputs needed: 1128084.1142857142' },
      { type: 'command', text: 'info digitalLock' },
      { type: 'element', content: <LockPreview /> },
    ],
  },
  {
    id: 6,
    key: 'greenhouseSim',
    title: 'Greenhouse Temperature Simulation',
    blurb: 'A full-stack simulation tool for passive solar greenhouse design, pairing physics-based thermal calculations with an in-progress ML model for inverse design and predictive analysis.',
    tech: ['Python', 'FastAPI', 'React', 'MangoDB', 'Git'],
    script: [
      { type: 'command', text: 'cd Projects/greenhouseSim' },
      { type: 'command', text: 'info greenhouseSim' },
      { type: 'element', content: <ProjectPlaceholder projectName="Greenhouse Temperature Simulation" gitURL="https://github.com/ratanakhek22/Solar-Greenhouse" /> },
      { type: 'command', text: 'clear' },
    ],
  },
]
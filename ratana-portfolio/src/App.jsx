import './App.css'

import PortfolioProvider from './context/PortfolioProvider'

import Hero from './components/Hero/Hero'
import Divider from './components/Divider/Divider'
import Projects from './components/Projects/Projects'
import Console from './components/Console/Console'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <PortfolioProvider>
        <Nav />
        <Hero />
        <Divider />
        <Projects />
        <Console />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </PortfolioProvider>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

import PortfolioProvider from './context/PortfolioProvider'

import Hero from './components/Hero/Hero'
import Divider from './components/Divider/Divider'
import Projects from './components/Projects/Projects'
import Console from './components/Console/Console'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <PortfolioProvider>
      <Hero />
      <Divider />
      <Projects />
      <Console />
      <Divider />
      <Skills />
      <Divider />
      <Profile />
      <Divider />
      <Contact />
    </PortfolioProvider>
  )
}

export default App

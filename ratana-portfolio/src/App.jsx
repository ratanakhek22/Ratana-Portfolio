import { useState } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Divider from './components/Divider/Divider'
import Projects from './components/Projects/Projects'
import Console from './components/Console/Console'
import ConsoleProvider from './components/ConsoleContext/ConsoleContext'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
      <Hero />
      <Divider />
      <ConsoleProvider>
        <Projects />
        <Console />
      </ConsoleProvider>
      <Profile />
      <Skills />
      <Divider />
      <Contact />
    </>
  )
}

export default App

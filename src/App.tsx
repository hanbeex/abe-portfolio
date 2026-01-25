import './App.css'
import Navbar from './sections/Navbar'
import { useEffect } from 'react';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';

export function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </div>
  )
}


'use client';

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useEffect } from 'react';

import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'


export default function Main() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main >
      <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    </main>
  )
}




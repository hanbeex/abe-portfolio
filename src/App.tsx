import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Marquee from '@/components/brutal/Marquee';
import { initLenis, destroyLenis } from '@/lib/lenis';
import { ScrollTrigger } from '@/lib/motion';

export function App() {
  useEffect(() => {
    initLenis();
    // Triggers must be re-measured once webfonts swap in and after full load,
    // otherwise cached start/end positions drift with the layout.
    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 300);
    document.fonts?.ready.then(refresh).catch(() => {});
    window.addEventListener('load', refresh);
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', refresh);
      destroyLenis();
    };
  }, []);

  return (
    <div className="grain overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Marquee
          text="Go ✷ Gin ✷ NestJS ✷ PostgreSQL ✷ Docker ✷ Kubernetes ✷ CI/CD ✷ WebSockets"
          color="berry"
          rotate={-2}
          className="-mt-10 mb-4"
        />
        <About />
        <TechStack />
        <Marquee
          text="Ship fast ✷ Break nothing ✷ Automate everything ✷ Monitor always"
          color="pop"
          rotate={1.5}
          className="-my-6"
        />
        <Experience />
        <Projects />
        <Marquee
          text="Open to work ✷ Backend ✷ DevOps ✷ Let's talk"
          color="ink"
          rotate={-1.5}
          className="-mb-8 mt-6"
        />
        <Contact />
      </main>
    </div>
  );
}

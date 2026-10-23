import { Component, lazy, Suspense, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '@/lib/lenis';
import ShapeGrid from '@/components/ui/ShapeGrid';

const Lanyard = lazy(() => import('@/components/ui/Lanyard'));
const portrait = <img src="/aku2.jpg" alt="Portrait of Abe Hersubagyo" className="mx-auto h-full max-h-[520px] w-auto max-w-full object-contain object-center" />;
class LanyardBoundary extends Component<{children: ReactNode}, {failed: boolean}> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? portrait : this.props.children; }
}

export default function Hero() {
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return <section id="top" className="relative isolate overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-20 lg:pb-24">
    <div className="hero-atmosphere pointer-events-none absolute inset-0 -z-10" aria-hidden="true"><ShapeGrid direction="right" speed={0.2} borderColor="rgba(250,246,247,0.18)" hoverFillColor="rgba(143,194,213,0.12)" squareSize={72} shape="square" hoverTrailAmount={0} /></div>
    <div className="container-site grid items-center gap-10 lg:min-h-[610px] lg:grid-cols-[1fr_1fr] lg:gap-8">
      <div className="reveal max-w-[620px]">
        <p className="section-label mb-6">Hello, I'm Abe</p>
        <h1 className="text-[clamp(42px,6vw,76px)] font-medium leading-[1.07] tracking-[-.055em]">Abe Hersubagyo<span className="text-[#8fc2d5]">.</span></h1>
        <p className="mt-5 text-[clamp(23px,2.8vw,34px)] font-medium leading-tight tracking-[-.035em] text-[#dcb7c6]">Backend &amp; DevOps Engineer</p>
        <p className="body-copy mt-7 max-w-[560px]">I build reliable APIs and the infrastructure that brings them to production. My work spans backend services, databases, deployment pipelines, and cloud systems.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button onClick={() => scrollToSection('#projects')} className="button-primary">View projects <ArrowUpRight size={18}/></button>
          <button onClick={() => scrollToSection('#contact')} className="button-secondary">Let's talk</button>
        </div>
      </div>
      <div className="reveal lanyard-frame relative mx-auto h-[420px] w-full max-w-[650px] sm:h-[550px] lg:h-[680px]" style={{touchAction: 'pan-y'}}>
        {reducedMotion ? portrait : <LanyardBoundary><Suspense fallback={null}><Lanyard fov={12} position={[0, 0, 20]}/></Suspense></LanyardBoundary>}
      </div>
    </div>
  </section>;
}

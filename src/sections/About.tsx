import { useEffect, useRef } from 'react';
import SectionHeading, { Line } from '@/components/brutal/SectionHeading';
import Sticker from '@/components/brutal/Sticker';
import { gsap, prefersReducedMotion } from '@/lib/motion';

const stats = [
  { value: '13+', label: 'Projects shipped' },
  { value: '10+', label: 'Tools mastered' },
  { value: '100%', label: 'Commit-ment' },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      /* Only y/opacity here: the card's -3° tilt is a CSS `rotate` property,
         so animating GSAP rotation too would compose the two. */
      gsap.fromTo(
        '[data-about-card]',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        }
      );
      gsap.fromTo(
        '[data-about-copy] > *',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        }
      );
      gsap.fromTo(
        '[data-stat]',
        { scale: 0 },
        {
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: '[data-stats]', start: 'top 88%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="01"
          kicker="About"
          title={
            <>
              <Line>Backend brains,</Line>
              <Line outline>DevOps hands.</Line>
            </>
          }
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center mt-14">
          {/* Photo ID card */}
          <div className="flex justify-center lg:justify-start">
            <div data-about-card className="relative" style={{ rotate: '-3deg' }}>
              <div className="relative bg-blush b-border shadow-brutal-lg rounded-2xl p-4 pb-6 hover-wiggle" style={{ ['--wiggle-rot' as string]: '-3deg' }}>
                {/* tape strips */}
                <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-6" aria-hidden="true" />
                <span className="tape -bottom-2 -right-6 rotate-45 hidden sm:block" aria-hidden="true" />

                <div className="b-border-sm rounded-lg overflow-hidden bg-paper">
                  <img
                    src="/aku2.jpg"
                    alt="Portrait of Abe"
                    className="w-[min(78vw,380px)] aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-end justify-between mt-4 px-1">
                  <div className="font-mono text-xs uppercase leading-tight">
                    <p className="font-bold">Abe Hersubagyo</p>
                    <p className="opacity-70">ID — BACKEND/DEVOPS</p>
                  </div>
                  <span className="font-display text-2xl text-pop" aria-hidden="true">✷</span>
                </div>
              </div>

              <Sticker color="pop" rotate={8} className="absolute -top-4 -right-5 z-10">
                Yes, it's me
              </Sticker>
            </div>
          </div>

          {/* Copy */}
          <div data-about-copy className="flex flex-col gap-6">
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
              I'm a Backend and DevOps engineer passionate about building scalable and reliable systems. I specialize in
              developing APIs with <strong className="text-berry">Gin</strong> and{' '}
              <strong className="text-berry">NestJS</strong>, managing{' '}
              <strong className="text-berry">PostgreSQL</strong> databases, and integrating real-time communication with
              WebSockets.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
              On the DevOps side, I focus on mastering{' '}
              <strong className="text-berry">CI/CD pipelines</strong> and deploying applications with{' '}
              <strong className="text-berry">Kubernetes</strong> — ensuring smooth, automated delivery from development
              to production.
            </p>

            <div data-stats className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  data-stat
                  className="bg-paper b-border shadow-brutal rounded-xl px-3 py-4 sm:px-5 sm:py-5 press"
                >
                  <p className="font-display font-extrabold text-2xl sm:text-4xl text-pop leading-none">{s.value}</p>
                  <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide mt-2 opacity-80">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

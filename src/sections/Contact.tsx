import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import DotGrid from '@/components/ui/DotGrid';
import Button from '@/components/brutal/Button';
import SectionHeading, { Line } from '@/components/brutal/SectionHeading';
import { contactCtas, socials } from '@/data/site';
import { scrollToSection } from '@/lib/lenis';
import { gsap, prefersReducedMotion } from '@/lib/motion';

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-contact-cta]',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        }
      );
      gsap.fromTo(
        '[data-contact-social]',
        { scale: 0 },
        {
          scale: 1,
          stagger: 0.06,
          duration: 0.45,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: root.current, start: 'top 60%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="contact" className="relative bg-blush overflow-hidden">
      {/* Interactive dot field — ReactBits DotGrid (listens globally, safe behind content) */}
      <div className="absolute inset-0" aria-hidden="true">
        <DotGrid
          dotSize={6}
          gap={28}
          baseColor="#E3E2DF"
          activeColor="#EE4C7C"
          proximity={130}
          shockRadius={220}
          shockStrength={4}
          returnDuration={1.4}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-16 flex flex-col items-center text-center gap-10">
        <SectionHeading
          index="05"
          kicker="Contact"
          align="center"
          title={
            <>
              <Line>Let's build</Line>
              <Line outline>something.</Line>
            </>
          }
        />

        <p className="max-w-xl text-lg leading-relaxed">
          Got a system to scale, a pipeline to fix, or just want to talk shop? My inbox is open — I answer fast.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {contactCtas.map((cta) => (
            <span key={cta.label} data-contact-cta>
              <Button
                size="lg"
                variant={cta.primary ? 'pop' : 'paper'}
                href={cta.href}
                external={!cta.href.startsWith('mailto:')}
              >
                {cta.label} <cta.icon size={18} strokeWidth={2.5} />
              </Button>
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              data-contact-social
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink b-border-sm shadow-brutal-sm press-sm hover:bg-pop hover:text-paper"
            >
              <s.icon size={18} strokeWidth={2.2} />
            </a>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <footer className="relative z-10 bg-ink text-paper border-t-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest">
          <span>© 2026 Abe Hersubagyo</span>
          <span className="flex items-center gap-2" aria-hidden="true">
            Backend <span className="text-pop">✷</span> DevOps <span className="text-pop">✷</span> Indonesia
          </span>
          <button
            onClick={() => scrollToSection('#top')}
            className="inline-flex items-center gap-1.5 font-bold hover:text-pop transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={14} strokeWidth={2.5} />
          </button>
        </div>
      </footer>
    </section>
  );
}

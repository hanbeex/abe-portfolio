import { useEffect, useRef } from 'react';
import SectionHeading, { Line } from '@/components/brutal/SectionHeading';
import Sticker from '@/components/brutal/Sticker';
import { experiences } from '@/data/experience';
import { gsap, prefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-xp-item]').forEach((item) => {
        const fromLeft = item.dataset.side === 'left';
        gsap.fromTo(
          item.querySelector('[data-xp-card]'),
          { x: fromLeft ? -70 : 70, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            scrollTrigger: { trigger: item, start: 'top 82%' },
          }
        );
        gsap.fromTo(
          item.querySelector('[data-xp-node]'),
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2.5)',
            scrollTrigger: { trigger: item, start: 'top 82%' },
          }
        );
      });
      gsap.fromTo(
        '[data-xp-spine]',
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-xp-list]',
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="03"
          kicker="Experience"
          title={
            <>
              <Line>Where I've</Line>
              <Line outline>been busy.</Line>
            </>
          }
        />

        <div data-xp-list className="relative mt-20">
          {/* spine */}
          <div
            data-xp-spine
            className="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-[3px] bg-ink lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14 lg:gap-20">
            {experiences.map((xp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={xp.org}
                  data-xp-item
                  data-side={left ? 'left' : 'right'}
                  className="relative grid lg:grid-cols-2 lg:gap-24 pl-14 lg:pl-0"
                >
                  {/* node */}
                  <div
                    data-xp-node
                    className="absolute left-0 lg:left-1/2 top-1 lg:-translate-x-1/2 w-10 h-10 rounded-full bg-pop b-border-sm shadow-brutal-sm grid place-items-center z-10"
                    aria-hidden="true"
                  >
                    <span className="text-paper font-display font-extrabold text-lg leading-none">✷</span>
                  </div>

                  {/* card */}
                  <div data-xp-card className={cn('lg:col-start-1', !left && 'lg:col-start-2')}>
                    <article
                      className={cn(
                        'bg-paper b-border shadow-brutal rounded-2xl overflow-hidden press',
                        left ? 'lg:-rotate-1' : 'lg:rotate-1'
                      )}
                    >
                      <div className="flex items-stretch border-b-[3px] border-ink">
                        <div className="bg-blush border-r-[3px] border-ink p-4 grid place-items-center shrink-0">
                          <img src={xp.image} alt={xp.org} className="w-14 h-14 object-contain" loading="lazy" />
                        </div>
                        <div className="p-4 flex flex-col justify-center">
                          <h3 className="font-display font-extrabold uppercase text-xl leading-tight">{xp.org}</h3>
                          <p className="font-mono text-xs uppercase tracking-wide text-berry font-bold">{xp.role}</p>
                        </div>
                      </div>
                      <div className="p-5 sm:p-6">
                        <Sticker color="ink" rotate={-2} className="mb-4">
                          {xp.period}
                        </Sticker>
                        <p className="leading-relaxed">{xp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {xp.tags.map((t) => (
                            <span key={t} className="font-mono text-[10px] font-bold uppercase bg-blush b-border-sm rounded px-2 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* period ghost text on the opposite side (desktop) */}
                  <div
                    className={cn(
                      'hidden lg:flex items-center justify-center col-start-2 row-start-1 pointer-events-none',
                      !left && 'col-start-1'
                    )}
                    aria-hidden="true"
                  >
                    <span className="font-display font-extrabold uppercase text-outline opacity-15 text-[5.5rem] leading-none select-none">
                      {xp.period.replace(/[^0-9—]/g, '')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

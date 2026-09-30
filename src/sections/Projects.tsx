import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading, { Line } from '@/components/brutal/SectionHeading';
import Sticker from '@/components/brutal/Sticker';
import { projects } from '@/data/projects';
import { gsap, prefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

const stackColors = ['bg-blush text-ink', 'bg-paper text-ink', 'bg-pop text-paper', 'bg-paper text-ink'];

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      /* Featured stack: previous card settles back as the next covers it */
      const wrappers = gsap.utils.toArray<HTMLElement>('[data-stack-wrap]');
      wrappers.forEach((wrap, i) => {
        if (i === wrappers.length - 1) return;
        const card = wrap.querySelector('[data-stack-card]');
        gsap.to(card, {
          scale: 0.94,
          rotate: i % 2 ? 1.2 : -1.2,
          filter: 'brightness(0.94)',
          ease: 'none',
          scrollTrigger: {
            trigger: wrappers[i + 1],
            start: 'top bottom',
            end: 'top top+=120',
            scrub: true,
          },
        });
      });

      /* Archive grid */
      gsap.fromTo(
        '[data-project-card]',
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-archive-grid]', start: 'top 85%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="04"
          kicker="Projects"
          title={
            <>
              <Line>Things I've</Line>
              <Line outline>shipped.</Line>
            </>
          }
        />

        {/* ── Featured: sticky stack ── */}
        <div className="mt-16 flex flex-col gap-8">
          {featured.map((p, i) => (
            <div
              key={p.title}
              data-stack-wrap
              className="sticky"
              style={{ top: `${92 + i * 16}px`, zIndex: i + 1 }}
            >
              <article
                data-stack-card
                className={cn(
                  'b-border shadow-brutal-lg rounded-2xl overflow-hidden grid md:grid-cols-[1.1fr_1fr] will-change-transform',
                  stackColors[i % stackColors.length]
                )}
              >
                {/* image */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink group"
                  aria-label={`Visit ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-56 md:h-full md:min-h-[380px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4">
                    <Sticker color="ink" rotate={-3}>
                      Featured
                    </Sticker>
                  </span>
                </a>

                {/* content */}
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-sm font-bold opacity-70">
                        P.0{i + 1} — {p.year}
                      </span>
                      <span className="font-display text-4xl leading-none opacity-25" aria-hidden="true">
                        ✷
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(1.7rem,3.5vw,2.8rem)]">
                      {p.title}
                    </h3>
                    <p className="leading-relaxed max-w-lg">{p.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] font-bold uppercase bg-paper text-ink b-border-sm rounded px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase bg-ink text-paper px-4 py-2.5 rounded-lg b-border-sm shadow-brutal-sm press-sm"
                      >
                        Visit <ArrowUpRight size={16} strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* ── Archive grid ── */}
        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-display font-extrabold uppercase text-3xl sm:text-4xl tracking-tight">The Archive</h3>
            <span className="hidden sm:block h-[3px] flex-1 bg-ink" aria-hidden="true" />
            <Sticker color="berry" rotate={2}>
              {rest.length} more
            </Sticker>
          </div>

          <div data-archive-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article
                key={p.title}
                data-project-card
                className="group bg-paper b-border shadow-brutal rounded-xl overflow-hidden flex flex-col press"
              >
                <div className="relative overflow-hidden border-b-[3px] border-ink">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-40 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-mono text-[10px] font-bold bg-ink text-paper px-2 py-1 rounded b-border-sm">
                    {p.year}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h4 className="font-display font-extrabold uppercase text-lg leading-tight">{p.title}</h4>
                  <p className="text-sm leading-relaxed opacity-85 flex-1">{p.description}</p>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="font-mono text-[9px] font-bold uppercase bg-blush b-border-sm rounded px-1.5 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${p.title}`}
                        className="shrink-0 grid place-items-center w-9 h-9 rounded-lg bg-pop text-paper b-border-sm shadow-brutal-sm press-sm"
                      >
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

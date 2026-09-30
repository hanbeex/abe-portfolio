import { lazy, Suspense, useEffect, useRef } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import CircularText from '@/components/ui/CircularText';
import TextType from '@/components/ui/TextType';
import Button from '@/components/brutal/Button';
import Sticker from '@/components/brutal/Sticker';
import { gsap, prefersReducedMotion } from '@/lib/motion';
import { scrollToSection } from '@/lib/lenis';
import { socials, CV_URL } from '@/data/site';

const Lanyard = lazy(() => import('@/components/ui/Lanyard'));

const floatStickers = [
  { label: 'GO ✷ GIN', rot: -6, pos: 'top-[13%] left-[47%]', mouse: 1.4 },
  { label: 'POSTGRES', rot: 4, pos: 'top-[33%] left-[34%]', mouse: 0.9 },
  { label: 'K8S', rot: -4, pos: 'bottom-[24%] left-[38%]', mouse: 1.8 },
  { label: 'CI/CD', rot: 6, pos: 'top-[10%] left-[57%]', mouse: 1.1 },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* ── Entrance choreography ── */
      gsap
        .timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 })
        .from('[data-hero-kicker]', { yPercent: 140, duration: 0.6 })
        .from('[data-hero-line]', { yPercent: 115, duration: 1, stagger: 0.1 }, '-=0.3')
        .from('[data-hero-sub]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.55')
        .from('[data-hero-cta]', { y: 24, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.45')
        .from('[data-hero-social]', { scale: 0, stagger: 0.06, duration: 0.45, ease: 'back.out(2)' }, '-=0.3')
        .from('[data-hero-sticker]', { scale: 0, rotate: '+=15', stagger: 0.07, duration: 0.5, ease: 'back.out(2.2)' }, '-=0.7')
        .from('[data-hero-lanyard]', { opacity: 0, y: -48, duration: 0.9 }, '-=0.9')
        .from('[data-hero-badge]', { scale: 0, duration: 0.6, ease: 'back.out(1.8)' }, '-=0.6')
        .from('[data-hero-bg]', { opacity: 0, duration: 1.2 }, 0);

      /* ── Scroll parallax — each layer drifts at its own speed ── */
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '0');
        gsap.to(el, {
          y: () => speed * 320,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });

      /* ── Mouse parallax — nested layer so it never fights scroll ── */
      const layers = gsap.utils.toArray<HTMLElement>('[data-mouse]').map((el) => ({
        x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),
        y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),
        f: parseFloat(el.dataset.mouse || '0'),
      }));
      const onMove = (e: MouseEvent) => {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        layers.forEach((l) => {
          l.x(cx * l.f * 44);
          l.y(cy * l.f * 26);
        });
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative overflow-hidden">
      {/* Layer 0 — giant outlined type + spinning asterisks (far) */}
      <div data-speed="0.25" data-hero-bg className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div data-mouse="0.4" className="absolute inset-0">
          <span className="absolute -bottom-8 right-0 font-display font-extrabold uppercase leading-none text-outline opacity-20 text-[26vw] select-none">
            ABE
          </span>
          <span className="absolute top-[10%] left-[2%] text-blush-soft text-[9rem] leading-none animate-spin-slow select-none">✷</span>
          <span className="absolute top-[62%] left-[46%] text-pop-soft opacity-60 text-[4rem] leading-none animate-spin-slow select-none hidden lg:block">
            ✷
          </span>
        </div>
      </div>

      {/* Layer 1 — floating tech stickers (mid) */}
      <div data-speed="0.55" className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        {floatStickers.map((s) => (
          <div key={s.label} data-mouse={s.mouse} className={`absolute ${s.pos}`}>
            <div data-hero-sticker>
              <Sticker rotate={s.rot} color="paper" className="animate-float" style={{ ['--float-rot' as string]: `${s.rot}deg` }}>
                {s.label}
              </Sticker>
            </div>
          </div>
        ))}
      </div>

      {/* Layer 2 — content (front) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center min-h-screen pt-20 pb-24 lg:py-0 gap-6 lg:gap-0">
          <div data-speed="0.12" className="flex flex-col items-start gap-6">
            <span className="reveal-line">
              <span data-hero-kicker className="inline-block">
                <Sticker color="pop" rotate={-2}>
                  ✷ Hello, I'm Abe
                </Sticker>
              </span>
            </span>

            <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-tight text-[clamp(3.2rem,9.5vw,7.5rem)]">
              <span className="reveal-line">
                <span data-hero-line className="block">Backend <span className="text-pop-soft">&</span></span>
              </span>
              <span className="reveal-line">
                <span data-hero-line className="block text-outline">DevOps</span>
              </span>
              <span className="reveal-line">
                <span data-hero-line className="block">Engineer<span className="text-pop-soft">.</span></span>
              </span>
            </h1>

            <p data-hero-sub className="max-w-xl text-base sm:text-lg leading-relaxed">
              I build scalable, reliable systems — APIs with <strong>Gin</strong> &amp; <strong>NestJS</strong>, PostgreSQL
              databases, real-time WebSockets — and ship them with <strong>CI/CD pipelines</strong> and{' '}
              <strong>Kubernetes</strong>, smooth from dev to production.
            </p>

            <div
              data-hero-sub
              className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-bold bg-paper b-border-sm shadow-brutal-sm rounded-lg px-4 py-2.5"
            >
              <span className="text-pop-soft" aria-hidden="true">&gt;</span>
              <TextType
                text={['scalable APIs', 'clean CI/CD pipelines', 'zero-downtime deploys', 'real-time WebSockets', 'happy on-call rotations']}
                typingSpeed={55}
                deletingSpeed={28}
                pauseDuration={1700}
                cursorCharacter="▮"
                cursorClassName="text-pop-soft"
                className="text-berry-soft"
                as="span"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <span data-hero-cta>
                <Button size="lg" variant="pop" onClick={() => scrollToSection('#projects')}>
                  View Projects <ArrowDown size={18} strokeWidth={2.5} />
                </Button>
              </span>
              <span data-hero-cta>
                <Button size="lg" variant="blush" href={CV_URL} external>
                  Check my CV <FileText size={18} strokeWidth={2.5} />
                </Button>
              </span>
            </div>

            <div className="flex gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  data-hero-social
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-11 h-11 rounded-full bg-paper text-ink b-border-sm shadow-brutal-sm press-sm hover:bg-blush"
                >
                  <s.icon size={18} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Lanyard — right on desktop, below on mobile */}
          <div data-hero-lanyard className="relative h-[380px] lg:h-[80vh] w-full">
            <Suspense fallback={null}>
              <Lanyard fov={15} position={[0, 0, 20]} />
            </Suspense>
            <div data-hero-badge className="absolute -bottom-2 left-2 lg:left-6 z-20">
              <div className="relative w-[164px] h-[164px] rounded-full bg-pop text-ink b-border shadow-brutal grid place-items-center">
                <CircularText
                  text="OPEN TO WORK ✷ BACKEND ✷ DEVOPS ✷ "
                  spinDuration={16}
                  onHover="speedUp"
                  className="absolute inset-0 w-full h-full font-mono text-[10.5px] uppercase text-ink"
                />
                <span className="font-display text-3xl font-extrabold leading-none pointer-events-none" aria-hidden="true">
                  ✷
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

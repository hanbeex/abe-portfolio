import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { gsap } from '@/lib/motion';
import { getLenis, scrollToSection } from '@/lib/lenis';
import { cn } from '@/lib/utils';

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Stack', hash: '#stack' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  /* Hide bar on scroll down, reveal on scroll up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > lastY.current && !open);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  /* Overlay starts off-screen; GSAP owns the transform entirely.
     useLayoutEffect = no first-paint flash. Never mix an inline transform:
     GSAP would parse it as a px offset and stack yPercent on top. */
  useLayoutEffect(() => {
    if (overlay.current) gsap.set(overlay.current, { yPercent: -100 });
  }, []);

  /* Mobile overlay choreography + scroll lock */
  useEffect(() => {
    const lenis = getLenis();
    const el = overlay.current;
    if (!el) return;

    if (open) {
      lenis?.stop();
      const links = el.querySelectorAll('[data-menu-link]');
      const foot = el.querySelector('[data-menu-foot]');
      const tl = gsap.timeline();
      tl.to(el, { yPercent: 0, duration: 0.5, ease: 'power4.inOut' })
        .fromTo(links, { yPercent: 120 }, { yPercent: 0, duration: 0.6, ease: 'power4.out', stagger: 0.07 }, '-=0.15')
        .fromTo(foot, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.25');
      return () => {
        tl.kill();
      };
    }

    lenis?.start();
    gsap.to(el, { yPercent: -100, duration: 0.45, ease: 'power4.in' });
  }, [open]);

  const go = (hash: string) => {
    setOpen(false);
    // wait for the overlay to close before scrolling on mobile
    setTimeout(() => scrollToSection(hash), open ? 350 : 0);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 bg-paper border-b-[3px] border-ink transition-transform duration-300',
          hidden && '-translate-y-full'
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 h-[64px]">
          <button
            onClick={() => go('#top')}
            className="font-mono font-bold text-lg tracking-tight cursor-pointer hover:text-pop transition-colors"
            aria-label="Back to top"
          >
            ABE<span className="text-pop">✷</span>DEV
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.hash}
                onClick={() => go(l.hash)}
                className="group relative overflow-hidden font-mono text-sm font-bold uppercase tracking-wide px-4 py-2 cursor-pointer"
              >
                <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-250 ease-out" />
                <span className="relative group-hover:text-paper transition-colors duration-250">{l.label}</span>
              </button>
            ))}
            <button
              onClick={() => go('#contact')}
              className="ml-3 inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase px-4 py-2 rounded-lg bg-pop text-paper b-border-sm shadow-brutal-sm press-sm cursor-pointer"
            >
              Let's talk <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 -mr-2 cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        ref={overlay}
        className="fixed inset-0 z-[60] md:hidden bg-berry text-paper flex flex-col overflow-y-auto pointer-events-none"
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-4 h-[64px] border-b-[3px] border-paper/40">
          <span className="font-mono font-bold text-lg">
            ABE<span className="text-blush">✷</span>DEV
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2 cursor-pointer">
            <X size={28} strokeWidth={2.5} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
          {[{ label: 'About', hash: '#about' }, { label: 'Stack', hash: '#stack' }, { label: 'Experience', hash: '#experience' }, { label: 'Projects', hash: '#projects' }, { label: 'Contact', hash: '#contact' }].map((l, i) => (
            <span key={l.hash} className="reveal-line">
              <button
                data-menu-link
                onClick={() => go(l.hash)}
                className="flex items-baseline gap-3 font-display font-extrabold uppercase text-[13vw] leading-[1.05] cursor-pointer hover:text-blush transition-colors"
              >
                <span className="font-mono text-sm font-normal opacity-70">0{i + 1}</span>
                {l.label}
              </button>
            </span>
          ))}
        </nav>

        <div data-menu-foot className="px-6 pb-8 font-mono text-xs uppercase tracking-widest opacity-80">
          Backend ✷ DevOps ✷ Indonesia
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  index,
  kicker,
  title,
  className,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });
      tl.fromTo(
        '[data-kicker]',
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
        .fromTo(
          '[data-title-line]',
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.09 },
          '-=0.15'
        )
        .fromTo('[data-rule]', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power3.inOut' }, '-=0.5');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      <span className="reveal-line">
        <span
          data-kicker
          className={cn(
            'inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em]',
            'px-3 py-1.5 rounded-md b-border-sm shadow-brutal-sm',
            dark ? 'bg-ink text-paper' : 'bg-pop text-ink'
          )}
        >
          <span aria-hidden>✷</span> {index} / {kicker}
        </span>
      </span>
      <h2 className="font-display font-extrabold uppercase leading-[0.92] tracking-tight text-[clamp(2.6rem,7vw,5.5rem)]">
        {title}
      </h2>
      <span
        data-rule
        className={cn('h-[3px] w-24 origin-left', dark ? 'bg-paper' : 'bg-ink', align === 'center' && 'origin-center')}
      />
    </div>
  );
}

/* Helper so headings can mix filled + outlined words inline */
export function Line({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <span className="reveal-line">
      <span data-title-line className={cn('block', outline && 'text-outline')}>
        {children}
      </span>
    </span>
  );
}

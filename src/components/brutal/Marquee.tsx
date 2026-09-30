import FastMarquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  text: string;
  color?: 'berry' | 'ink' | 'pop' | 'paper';
  rotate?: number;
  speed?: number;
  className?: string;
  outline?: boolean;
}

const colors = {
  berry: 'bg-berry text-paper',
  ink: 'bg-ink text-paper',
  pop: 'bg-pop text-paper',
  paper: 'bg-paper text-ink',
};

/**
 * Rotated ticker strip used as a divider between sections.
 * Slightly oversized so rotation never reveals gaps.
 */
export default function Marquee({
  text,
  color = 'berry',
  rotate = -2,
  speed = 60,
  className,
  outline = false,
}: MarqueeProps) {
  const row = (text.endsWith('✷') ? text : `${text} ✷ `).repeat(4);

  return (
    <div className={cn('relative z-10 w-[110vw] -ml-[5vw] select-none', className)} style={{ rotate: `${rotate}deg` }}>
      <div className={cn('border-y-[3px] border-ink py-3 sm:py-4 overflow-hidden', colors[color])}>
        <FastMarquee speed={speed} gradient={false} aria-hidden="true">
          <span
            className={cn(
              'font-display font-extrabold uppercase whitespace-nowrap leading-none',
              'text-[clamp(1.6rem,4vw,3.2rem)] tracking-tight pr-8',
              outline && 'text-outline-paper'
            )}
          >
            {row}
          </span>
        </FastMarquee>
      </div>
    </div>
  );
}

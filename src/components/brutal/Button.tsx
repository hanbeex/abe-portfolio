import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'pop' | 'blush' | 'ink' | 'paper';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  href?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  pop: 'bg-pop text-paper',
  blush: 'bg-blush text-ink',
  ink: 'bg-ink text-paper',
  paper: 'bg-paper text-ink',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
};

export default function Button({
  href,
  external,
  onClick,
  variant = 'pop',
  size = 'md',
  className,
  children,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-mono font-bold uppercase tracking-wide',
    'b-border shadow-brutal press cursor-pointer select-none',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface StickerProps {
  children: React.ReactNode;
  rotate?: number;
  color?: 'blush' | 'pop' | 'paper' | 'ink' | 'berry';
  className?: string;
  style?: React.CSSProperties;
}

const colors = {
  blush: 'bg-blush text-ink',
  pop: 'bg-pop text-paper',
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-paper',
  berry: 'bg-berry text-paper',
};

export default function Sticker({ children, rotate = -3, color = 'blush', className, style }: StickerProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs font-bold uppercase tracking-wider',
        'px-3 py-1.5 rounded-md b-border-sm shadow-brutal-sm hover-wiggle',
        colors[color],
        className
      )}
      style={{ rotate: `${rotate}deg`, ...style }}
    >
      {children}
    </span>
  );
}

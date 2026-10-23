import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '@/lib/lenis';

const links = [
  { label: 'Projects', hash: '#projects' },
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === 'Tab' && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLButtonElement>('button'));
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  const go = (hash: string) => { setOpen(false); scrollToSection(hash); };
  return <header className="sticky top-0 z-50 border-b border-white/15 bg-burgundy/95 backdrop-blur-xl">
    <div className="container-site flex h-[72px] items-center justify-between">
      <button onClick={() => go('#top')} className="text-lg font-semibold tracking-[-.025em]">Abe Hersubagyo<span className="text-[#8fc2d5]">.</span></button>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.slice(0, 3).map(link => <button key={link.hash} onClick={() => go(link.hash)} className="text-sm font-medium text-[#ead7de] transition-colors hover:text-white">{link.label}</button>)}
        <button onClick={() => go('#contact')} className="button-primary min-h-10 px-4 py-2 text-sm">Let's talk <ArrowUpRight size={16}/></button>
      </nav>
      <button ref={triggerRef} onClick={() => setOpen(value => !value)} className="rounded-lg p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={24}/> : <Menu size={24}/>}</button>
    </div>
    {open && <div ref={menuRef} id="mobile-menu" className="absolute inset-x-0 top-full border-b border-[#eadfe3] bg-burgundy p-5 shadow-lg md:hidden"><nav aria-label="Mobile navigation" className="container-site flex flex-col gap-1">{links.map(link => <button key={link.hash} onClick={() => go(link.hash)} className="rounded-lg px-3 py-3 text-left text-lg font-medium hover:bg-white/10">{link.label}</button>)}</nav></div>}
  </header>;
}

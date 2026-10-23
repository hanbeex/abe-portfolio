// Keep the existing section-link interface while using native scrolling.
export function scrollToSection(hash: string): void {
  const element = document.querySelector<HTMLElement>(hash);
  if (!element) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
}

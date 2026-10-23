import { experiences } from '@/data/experience';
export default function Experience() {
  return <section id="experience" className="section-space border-t border-white/15"><div className="container-site">
    <div className="reveal mb-10 sm:mb-14"><p className="section-label">Experience</p><h2 className="section-title">The work and communities that shaped me.</h2></div>
    <div className="border-t border-white/20">{experiences.map(xp => <article key={xp.org} className="reveal grid gap-3 border-b border-white/20 py-7 md:grid-cols-[160px_1fr_1.5fr] md:gap-8 md:py-9"><p className="text-sm font-medium text-[#d9b8c5]">{xp.period}</p><div><h3 className="text-xl font-medium">{xp.org}</h3><p className="mt-1 text-sm text-[#d9b8c5]">{xp.role}</p></div><p className="body-copy text-[16px]">{xp.description}</p></article>)}</div>
  </div></section>;
}

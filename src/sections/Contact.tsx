import { ArrowUpRight } from 'lucide-react';
import { socials } from '@/data/site';
import { scrollToSection } from '@/lib/lenis';
export default function Contact() {
  return <section id="contact" className="border-t border-white/15 bg-[#4c1d30]"><div className="container-site py-20 text-center sm:py-28"><div className="reveal"><p className="section-label">Get in touch</p><h2 className="section-title mx-auto max-w-[650px]">Let's build something useful together.</h2><p className="body-copy mx-auto mt-5 max-w-[560px]">Have a project or opportunity in mind? I'd be glad to hear about it.</p><a className="button-primary mt-8" href="https://wa.me/6285800738654" target="_blank" rel="noopener noreferrer">Message me on WhatsApp <ArrowUpRight size={18}/></a></div></div>
    <footer className="border-t border-white/15"><div className="container-site flex flex-col items-center gap-4 py-6 text-center text-sm text-[#e5cdd6] sm:flex-row sm:gap-6 sm:text-left"><span className="sm:flex-1">© 2026 Abe Hersubagyo</span><div className="flex flex-wrap justify-center gap-5">{socials.filter(s => s.label !== 'WhatsApp').map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">{s.label}</a>)}</div><button onClick={() => scrollToSection('#top')} className="hover:text-white hover:underline sm:flex-1 sm:text-right">Back to top</button></div></footer>
  </section>;
}

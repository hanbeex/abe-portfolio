import { useEffect, useState } from 'react';
import AccordionGallery from '@/components/ui/AccordionGallery';
import { projects } from '@/data/projects';

const featured = projects.filter(project => project.featured);
const archive = projects.filter(project => !project.featured);

export default function Projects() {
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const selected = featured[active] ?? featured[0];

  return <section id="projects" className="section-space border-t border-white/15">
    <div className="container-site">
      <div className="reveal mb-10 max-w-[650px] sm:mb-14">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects built for real needs.</h2>
        <p className="body-copy mt-5">A selection of backend platforms and web applications I have helped build.</p>
      </div>

      <div className="reveal">
        <AccordionGallery
          items={featured.map(project => ({ image: project.image, label: project.title, alt: `${project.title} preview` }))}
          defaultIndex={0}
          onActiveChange={setActive}
          orientation={mobile ? 'vertical' : 'horizontal'}
          height={mobile ? 390 : 490}
          gap={10}
          radius={18}
          expandRatio={mobile ? 0.45 : 0.56}
          accentColor="#8fc2d5"
          overlayColor="#59253a"
          textColor="#faf6f7"
          duration={0.42}
          parallax={0.12}
          tilt={0}
          grayscale={false}
          trigger={mobile ? 'click' : 'hover'}
          className="projects-gallery"
        />
        <div className="mt-5 grid gap-5 rounded-[20px] border border-white/20 bg-white/[.055] p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[#dcb7c6]">0{active + 1} / 0{featured.length} · {selected.year}</p>
            <h3 className="mt-2 text-2xl font-medium tracking-[-.025em]">{selected.title}</h3>
            <p className="mt-3 max-w-[780px] leading-relaxed text-[#ead7de]">{selected.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{selected.tags.map(tag => <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-[#f3e4e9]">{tag}</span>)}</div>
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-28">
        <div className="reveal mb-7 flex flex-wrap items-end justify-between gap-3"><div><p className="section-label">More work</p><h3 className="mt-2 text-[clamp(26px,3vw,36px)] font-medium tracking-[-.03em]">Project archive</h3></div><span className="text-sm text-[#dcb7c6]">{archive.length} projects</span></div>
        <div className="grid gap-4 md:grid-cols-2">
          {archive.map((project, index) => <article key={project.title} className="archive-row group flex gap-4 rounded-[18px] border border-white/15 bg-white/[.03] p-4 transition-colors hover:border-white/30 sm:gap-5 sm:p-5">
            <div className="group/img relative shrink-0">
              <div className="h-28 w-28 overflow-hidden rounded-xl bg-[#f0e9ec] p-1.5 sm:h-32 sm:w-32"><img src={project.image} alt={`${project.title} thumbnail`} loading="lazy" className="h-full w-full rounded-lg object-contain"/></div>
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="pointer-events-none absolute left-0 top-full z-50 mt-2 hidden w-72 max-w-none rounded-xl border border-white/20 bg-[#f0e9ec] object-contain shadow-2xl group-hover/img:block" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="text-xs text-[#dcb7c6]">{String(index + 1).padStart(2, '0')}</span><h4 className="text-lg font-medium">{project.title}</h4><span className="text-xs text-[#dcb7c6]">{project.year}</span></div>
              <p className="mt-2 text-sm leading-relaxed text-[#ead7de]">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#dcb7c6]">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
}

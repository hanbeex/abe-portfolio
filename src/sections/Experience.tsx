import { workExperiences, organizationExperiences } from '@/data/experience';

function WorkList() {
  return (
    <div className="border-t border-white/20">
      {workExperiences.map(xp => (
        <article key={xp.org + xp.role} className="reveal grid gap-3 border-b border-white/20 py-7 md:grid-cols-[160px_1fr_1.5fr] md:gap-8 md:py-9">
          <p className="text-sm font-medium text-[#d9b8c5]">{xp.period}</p>
          <div className="flex items-start gap-4">
            <div className="group relative shrink-0">
              <img src={xp.image} alt={`${xp.org} logo`} className="h-12 w-12 rounded-xl border border-white/10 object-cover" />
              <img src={xp.image} alt={`${xp.org} preview`} loading="lazy" className="pointer-events-none absolute left-0 top-14 z-50 hidden w-64 max-w-none rounded-xl border border-white/20 object-cover shadow-2xl group-hover:block" />
            </div>
            <div>
              <h3 className="text-xl font-medium">{xp.org}</h3>
              <p className="mt-1 text-sm text-[#d9b8c5]">{xp.role}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {xp.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/70">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="body-copy text-[16px]">{xp.description}</p>
        </article>
      ))}
    </div>
  );
}

function OrganizationChips() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {organizationExperiences.map(org => (
        <article key={org.org} className="reveal flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4">
          <div className="group relative shrink-0">
            <img src={org.image} alt={`${org.org} logo`} className="h-12 w-12 rounded-xl border border-white/10 object-cover" />
            <img src={org.image} alt={`${org.org} preview`} loading="lazy" className="pointer-events-none absolute left-0 top-14 z-50 hidden w-64 max-w-none rounded-xl border border-white/20 object-cover shadow-2xl group-hover:block" />
          </div>
          <div className="min-w-0">
            <h4 className="truncate text-base font-medium">{org.org}</h4>
            <p className="truncate text-sm text-[#d9b8c5]">{org.role}</p>
            <p className="mt-0.5 text-xs text-white/50">{org.period}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-space border-t border-white/15">
      <div className="container-site">
        <div className="reveal mb-10 sm:mb-14">
          <p className="section-label">Experience</p>
          <h2 className="section-title">The work and communities that shaped me.</h2>
        </div>

        <div className="reveal mb-6 sm:mb-8">
          <h3 className="text-lg font-medium tracking-wide text-white/90">Work Experience</h3>
        </div>
        <WorkList />

        <div className="reveal mb-6 mt-12 sm:mb-8">
          <h3 className="text-lg font-medium tracking-wide text-white/90">Organizations</h3>
        </div>
        <OrganizationChips />
      </div>
    </section>
  );
}

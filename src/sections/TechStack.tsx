import { Code2, Server, Boxes } from 'lucide-react';

const groups = [
  { title: 'Languages', icon: Code2, items: ['Go', 'TypeScript', 'JavaScript', 'Python'] },
  { title: 'Backend & web', icon: Server, items: ['Gin', 'NestJS', 'FastAPI', 'Flask', 'Next.js', 'React', 'PostgreSQL'] },
  { title: 'DevOps & infrastructure', icon: Boxes, items: ['Docker', 'Kubernetes', 'Jenkins', 'Grafana', 'CI/CD'] },
];
export default function TechStack() {
  return <section id="stack" className="section-space border-t border-white/15"><div className="container-site">
    <div className="reveal mb-10 sm:mb-14"><p className="section-label">Tools I use</p><h2 className="section-title">A practical toolkit for building and shipping.</h2></div>
    <div className="grid gap-5 md:grid-cols-3">{groups.map(group => <article key={group.title} className="reveal rounded-[22px] border border-white/20 bg-white/[.06] p-6 sm:p-7"><div className="flex items-center gap-3"><group.icon size={21} className="text-[#8fc2d5]" aria-hidden="true"/><h3 className="text-xl font-medium">{group.title}</h3></div><div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-white/20 bg-white/[.06] px-3 py-1.5 text-sm text-cream">{item}</span>)}</div></article>)}</div>
  </div></section>;
}

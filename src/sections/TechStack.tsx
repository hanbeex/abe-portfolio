import { useEffect, useRef } from 'react';
import SectionHeading, { Line } from '@/components/brutal/SectionHeading';
import LogoLoop from '@/components/ui/LogoLoop';
import { gsap, prefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

import GinIcon from '../assets/gin-cleaned-negative.svg?react';
import NestIcon from '../assets/NestJS-negative.svg?react';
import FastAPIIcon from '../assets/fastapi-negative.svg?react';
import FlaskIcon from '../assets/flask-negative.svg?react';
import NextIcon from '../assets/nextjs-negative.svg?react';
import GoIcon from '../assets/go-negative.svg?react';
import TSIcon from '../assets/ts-negative.svg?react';
import JSIcon from '../assets/js-negative.svg?react';
import PythonIcon from '../assets/python-negative.svg?react';
import DockerIcon from '../assets/docker-negative.svg?react';
import KubernetesIcon from '../assets/kubernetes-negative.svg?react';
import JenkinsIcon from '../assets/jenkins-negative.svg?react';
import GrafanaIcon from '../assets/grafana-negative.svg?react';
import ReactIcon from '../assets/react-negative.svg?react';

interface TechItem {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Category {
  title: string;
  blurb: string;
  items: TechItem[];
  bg: 'bg-blush' | 'bg-paper' | 'bg-pop';
  tilt: string;
  shift: string;
}

const categories: Category[] = [
  {
    title: 'Languages',
    blurb: 'The grammars I think in.',
    bg: 'bg-blush',
    tilt: '-rotate-1',
    shift: '',
    items: [
      { name: 'Go', icon: GoIcon },
      { name: 'TypeScript', icon: TSIcon },
      { name: 'JavaScript', icon: JSIcon },
      { name: 'Python', icon: PythonIcon },
    ],
  },
  {
    title: 'Backend',
    blurb: 'APIs, services & servers.',
    bg: 'bg-paper',
    tilt: 'rotate-1',
    shift: 'lg:mt-12',
    items: [
      { name: 'Gin', icon: GinIcon },
      { name: 'NestJS', icon: NestIcon },
      { name: 'FastAPI', icon: FastAPIIcon },
      { name: 'Flask', icon: FlaskIcon },
      { name: 'Next.js', icon: NextIcon },
      { name: 'React', icon: ReactIcon },
    ],
  },
  {
    title: 'DevOps & Infra',
    blurb: 'Ship it, watch it, scale it.',
    bg: 'bg-blush',
    tilt: '-rotate-1',
    shift: '',
    items: [
      { name: 'Docker', icon: DockerIcon },
      { name: 'Kubernetes', icon: KubernetesIcon },
      { name: 'Jenkins', icon: JenkinsIcon },
      { name: 'Grafana', icon: GrafanaIcon },
    ],
  },
];

const loopLogos = [
  { node: <GoIcon />, title: 'Go', href: 'https://go.dev' },
  { node: <TSIcon />, title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { node: <JSIcon />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <PythonIcon />, title: 'Python', href: 'https://www.python.org/' },
  { node: <GinIcon />, title: 'Gin', href: 'https://gin-gonic.com/' },
  { node: <NestIcon />, title: 'NestJS', href: 'https://nestjs.com/' },
  { node: <FastAPIIcon />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
  { node: <FlaskIcon />, title: 'Flask', href: 'https://flask.palletsprojects.com/' },
  { node: <NextIcon />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <ReactIcon />, title: 'React', href: 'https://react.dev' },
  { node: <DockerIcon />, title: 'Docker', href: 'https://www.docker.com/' },
  { node: <KubernetesIcon />, title: 'Kubernetes', href: 'https://kubernetes.io/' },
  { node: <JenkinsIcon />, title: 'Jenkins', href: 'https://www.jenkins.io/' },
  { node: <GrafanaIcon />, title: 'Grafana', href: 'https://grafana.com/' },
];

export default function TechStack() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-stack-card]',
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: { trigger: '[data-stack-grid]', start: 'top 80%' },
        }
      );
      gsap.fromTo(
        '[data-chip]',
        { scale: 0 },
        {
          scale: 1,
          stagger: { each: 0.04, from: 'start' },
          duration: 0.4,
          ease: 'back.out(2.5)',
          scrollTrigger: { trigger: '[data-stack-grid]', start: 'top 70%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="stack" className="relative py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="02"
          kicker="Tech Stack"
          title={
            <>
              <Line>The tools</Line>
              <Line outline>I trust.</Line>
            </>
          }
        />

        {/* Icon ticker — ReactBits LogoLoop */}
        <div className="mt-14 -mx-5 sm:-mx-8 border-y-[3px] border-ink bg-paper py-4 overflow-hidden">
          <LogoLoop
            logos={loopLogos}
            speed={70}
            direction="left"
            logoHeight={34}
            gap={56}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#59253A"
            ariaLabel="Technologies I use"
          />
        </div>

        <div data-stack-grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {categories.map((cat) => (
            <article
              key={cat.title}
              data-stack-card
              className={cn(
                'b-border shadow-brutal-lg rounded-2xl p-6 sm:p-7 flex flex-col gap-5 press',
                cat.bg,
                cat.tilt,
                cat.shift
              )}
            >
              <header className="flex items-start justify-between gap-3 border-b-[3px] border-ink pb-4">
                <div>
                  <h3 className="font-display font-extrabold uppercase text-2xl tracking-tight">{cat.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-wide opacity-70 mt-1">{cat.blurb}</p>
                </div>
                <span className="font-display text-3xl leading-none text-pop-soft" aria-hidden="true">✷</span>
              </header>

              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    data-chip
                    className="inline-flex items-center gap-2 bg-paper b-border-sm shadow-brutal-sm rounded-lg px-3 py-2 press-sm"
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    <span className="font-mono text-xs font-bold uppercase">{item.name}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

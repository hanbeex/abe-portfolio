// ─────────────────────────────────────────────────────────────
// EXPERIENCE ENTRIES — drafted from available assets.
// Fix roles, dates and descriptions here; the section renders
// straight from this file.
// ─────────────────────────────────────────────────────────────

export interface Experience {
  org: string;
  role: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    org: 'Bangkit Academy',
    role: 'Cloud Computing Cohort',
    period: '2024',
    description:
      'Google-led independent study program (with GoTo & Traveloka). Completed the Cloud Computing track — GCP infrastructure, deployments, and a team capstone project from pitch to production.',
    image: '/bangkit.png',
    tags: ['GCP', 'Cloud', 'Capstone'],
  },
  {
    org: 'HIMASTER',
    role: 'Technology Division',
    period: '2023 — Present',
    description:
      'Computer Science student association. Building and maintaining internal web tooling, and helping run tech events, workshops, and competitions for fellow students.',
    image: '/himaster.png',
    tags: ['Community', 'Web', 'Events'],
  },
  {
    org: 'Teaching Assistant',
    role: 'Programming Tutor',
    period: '2023 — 2024',
    description:
      'Mentored peers on programming fundamentals and web development — preparing material, reviewing code, and guiding project work.',
    image: '/teaching.png',
    tags: ['Mentoring', 'Teaching'],
  },
  {
    org: 'OSIS',
    role: 'Student Council — Tech & Media',
    period: '2020 — 2022',
    description:
      'Ran media and tech for the student council: event documentation, publications, and the first taste of shipping things people actually use.',
    image: '/osis.png',
    tags: ['Media', 'Leadership'],
  },
];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EXPERIENCE ENTRIES - drafted from available assets.
// Fix roles, dates and descriptions here; the section renders
// straight from this file.
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface Experience {
  org: string;
  role: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
}

export const workExperiences: Experience[] = [
  {
    org: 'PT. Sismedika',
    role: 'Full-Stack Developer',
    period: '2026 - Present',
    description:
      'Software house for hospitals and healthcare - building and maintaining health information systems.',
    image: '/sismedika.png',
    tags: ['Full-Stack', 'Healthcare'],
  },
  {
    org: 'PT. Prabotmama',
    role: 'Full-Stack Developer',
    period: '2025 - 2026',
    description:
      'Perabotan / household furniture business - building systems for catalog, sales, and operations.',
    image: '/prabotmama.jpeg',
    tags: ['Full-Stack', 'Retail'],
  },
  {
    org: 'CV. Enzo Group',
    role: 'Full-Stack Developer',
    period: '2024 - 2025',
    description:
      'Wedding invitation, souvenir, and packaging business - building ordering and production systems.',
    image: '/enzo-3.png',
    tags: ['Full-Stack', 'E-Commerce'],
  },
  {
    org: 'PT. Lokasolusi',
    role: 'Backend Developer (Remote)',
    period: '2024',
    description:
      'Software house based in North Jakarta serving various clients - working remotely on backend services.',
    image: '/lokasolusi.webp',
    tags: ['Backend', 'Remote'],
  },
  {
    org: 'Teaching Assistant',
    role: 'Programming Tutor',
    period: '2023 - 2025',
    description:
      'Mentored peers on programming fundamentals and web development - preparing material, reviewing code, and guiding project work.',
    image: '/teaching.png',
    tags: ['Mentoring', 'Teaching'],
  },
];

export const organizationExperiences: Experience[] = [
  {
    org: 'Bangkit Academy',
    role: 'Cloud Computing Cohort',
    period: '2024',
    description:
      'Google-led independent study program (with GoTo & Traveloka). Completed the Cloud Computing track - GCP infrastructure, deployments, and a team capstone project from pitch to production.',
    image: '/bangkit.png',
    tags: ['GCP', 'Cloud', 'Capstone'],
  },
  {
    org: 'HIMASTER & BEM',
    role: 'Sports & Arts Minister',
    period: '2023 - 2025',
    description:
      'Computer Science student association. A minister of the sports & arts division',
    image: '/himaster.png',
    tags: ['Community', 'Web', 'Events'],
  },
  {
    org: 'OSIS',
    role: 'Student Council - Arts Division',
    period: '2020 - 2022',
    description:
      'Ran arts programs for the student council: performances, event documentation, and the first taste of shipping things people actually use.',
    image: '/osis.png',
    tags: ['Media', 'Leadership'],
  },
];

// Kept for backwards compatibility.
export const experiences: Experience[] = [...workExperiences, ...organizationExperiences];

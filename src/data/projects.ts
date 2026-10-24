export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Wedding Invitation & Souvenir ERP',
    description:
      'Laravel-based ERP that streamlines order management with real-time inventory tracking, automated purchase orders after payment, and a dynamic team calendar. Replaces spreadsheets with one centralized system.',
    image: '/enzo.png',
    link: 'https://erp.enzocreatives.com',
    tags: ['Laravel', 'MySQL', 'Inventory'],
    year: '2024',
    featured: true,
  },
  {
    title: 'HRIS Backend - PT Tata Wisata',
    description:
      'NestJS backend for a Human Resource Information System. JWT auth, RBAC, PostgreSQL + KyselyDB query optimization, attendance tracking, payroll automation, and REST API integration.',
    image: '/hris.jpg',
    link: 'http://203.194.113.6:3000/',
    tags: ['NestJS', 'PostgreSQL', 'JWT', 'RBAC'],
    year: '2024',
    featured: true,
  },
  {
    title: 'Cargo Logistics Platform',
    description:
      'Fullstack export-import cargo management system. Go/Gin + PostgreSQL backend for shipment lifecycle, documentation, and ops workflows, with a Next.js frontend for real-time shipment tracking and dashboard visualization. Documented and tested with Postman.',
    image: '/emran.webp',
    link: 'https://system.emrankargo.com',
    tags: ['Go', 'Next.js', 'PostgreSQL'],
    year: '2024',
    featured: true,
  },
  {
    title: 'WM Center Booking Backend',
    description:
      'Backend for a massage appointment platform - scheduling, therapist assignment, and booking flows with Go/Gin and PostgreSQL.',
    image: '/wmcenter.png',
    link: 'https://wmcenter.id',
    tags: ['Go', 'Gin', 'PostgreSQL'],
    year: '2024',
    featured: true,
  },
  {
    title: 'UNISRI LIK',
    description:
      'Website for innovation & entrepreneurship programs at UNISRI. Streamlines event registration and participant management.',
    image: '/lik.png',
    link: 'https://lik-unisri.com/',
    tags: ['Web', 'Events'],
    year: '2023',
  },
  {
    title: 'UNISRI LSP',
    description:
      'Certification management platform for professional exams - registration, progress tracking, and certification results.',
    image: '/lsp.png',
    link: 'https://lsp-unisri.com/',
    tags: ['Web', 'Certification'],
    year: '2023',
  },
  {
    title: 'Health Tracker',
    description:
      'MERN-stack health tracking app for calories, exercise, and personalized recommendations.',
    image: '/rpl.png',
    link: 'https://github.com/hanbeex/project-rpl-2',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    year: '2023',
  },
  {
    title: 'Portal Prestasi',
    description:
      'Laravel platform for discovering events & scholarships - registration flows and admin management.',
    image: '/portalprestasi.png',
    link: 'https://github.com/hanbeex/PortalPrestasi',
    tags: ['Laravel', 'MySQL'],
    year: '2023',
  },
  {
    title: 'Datalake',
    description:
      'Centralized hospital data platform - ingesting records from clinical systems into one queryable lake for reporting and analytics.',
    image: '/datalake.png',
    tags: ['Laravel', 'Go', 'PostgreSQL', 'ETL'],
    year: '2026',
  },
  {
    title: 'Labling',
    description:
      'Laboratory sample tracking system - from specimen intake and labeling to result recording for hospital lab workflows.',
    image: '/labling.png',
    tags: ['Go', 'PostgreSQL'],
    year: '2026',
  },
  {
    title: 'Diagnos',
    description:
      'Homecare reservation and reporting platform - booking home visits, assigning care staff, and generating visit reports.',
    image: '/diagnos.png',
    tags: ['Go', 'PostgreSQL'],
    year: '2026',
  },
  {
    title: 'Inventory & Financial Management',
    description:
      'Inventory and finance system for a furniture business - stock tracking across catalog items tied into budgeting and financial reports.',
    image: '/inventoryfinancialmanagement.png',
    tags: ['NestJS', 'Next.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    title: 'Ngampus',
    description:
      'Campus backend service - academic data and student services API. Details to follow.',
    image: '/ngampus.png',
    tags: ['Go', 'PostgreSQL'],
    year: '2026',
  },
  {
    title: 'Jebret',
    description:
      'Self-service photobooth kiosk stationed at Lokananta for the "Headline" photobooth spot - guest session flow, capture, print queue, and an admin app for operators. Work in progress.',
    image: '/project-jebret.svg',
    tags: ['NestJS', 'Expo', 'WIP'],
    year: '2026',
  },
];

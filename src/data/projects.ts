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
    link: 'https://github.com/AbrahamWillemH/project-rpl-2',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    year: '2023',
  },
  {
    title: 'Portal Prestasi',
    description:
      'Laravel platform for discovering events & scholarships - registration flows and admin management.',
    image: '/portalprestasi.png',
    link: 'https://github.com/AbrahamWillemH/PortalPrestasi',
    tags: ['Laravel', 'MySQL'],
    year: '2023',
  },
  {
    title: 'Tower Defense Game',
    description:
      'Little game built with Greenfoot - waves, upgrades, and strategic tower placement.',
    image: '/greenfoot.png',
    link: 'https://www.greenfoot.org/scenarios/32214',
    tags: ['Java', 'Greenfoot'],
    year: '2022',
  },
  {
    title: 'Turing Machine Simulator',
    description:
      'Web-based multitape Turing Machine simulator solving (m+n)^a/b - Flask backend with an interactive JS front.',
    image: '/tba.png',
    link: 'https://project-tba-uas.vercel.app/',
    tags: ['Flask', 'JavaScript'],
    year: '2023',
  },
  {
    title: 'Payroll Management System',
    description:
      'Microsoft Access payroll system with attendance, overtime, deductions, and payslip generation.',
    image: '/payrollmanagement.png',
    tags: ['MS Access', 'VBA'],
    year: '2022',
  },
  {
    title: 'Bike Sharing Analysis',
    description:
      'Exploratory analysis of a bike-sharing dataset with Python, Pandas, Matplotlib & Seaborn - uncovering usage trends.',
    image: '/bikesharing.png',
    link: 'https://github.com/AbrahamWillemH/dicoding-project-bike-rental',
    tags: ['Python', 'Pandas', 'EDA'],
    year: '2023',
  },
];

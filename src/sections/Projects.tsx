'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Wedding Invitation & Souvenir ERP Website",
      description: "Laravel-based website. Streamlines customer order management while seamlessly integrating inventory tracking, purchase orders, and team calendars. It ensures real-time inventory updates, automates purchase orders after payments, and keeps the team on schedule with a dynamic calendar. <br><br>Designed for efficiency, it replaces spreadsheets with a centralized system, improving workflow and reducing errors.",
      image: "enzo-3.png",
      link: "https://erp.enzocreatives.com"
    },
    {
      title: "Human Resource App Backend (NestJS)",
      description: "I developed the backend for a Human Resource Information System (HRIS) website for PT Tata Wisata using NestJS. <br><br>Implemented JWT auth, RBAC, PostgreSQL + KyselyDB optimization, attendance tracking, payroll automation, and REST API integration.",
      image: "hris.jpg",
      link: "http://203.194.113.6:3000/"
    },
    {
      title: "Cargo Logistics App Backend (Go/Gin)",
      description: "Backend for Export-Import (Cargo) Management System using Go/Gin Framework, PostgreSQL, Postman",
      image: "emran.webp",
      link: "https://system.emrankargo.com"
    },
    {
      title: "Cargo Logistics App Frontend (NextJS)",
      description: "Frontend for Export-Import (Cargo) Management System using Next.js, Tailwind CSS, SSR & SSG. <br><br>Includes real-time shipment tracking and dashboard visualization.",
      image: "emran.webp",
      link: "https://system.emrankargo.com"
    },
    {
      title: "WM Center Massage App Backend (Go/Gin)",
      description: "Backend for WM Center (a massage appointment app) using Go/Gin Framework, PostgreSQL, Postman",
      image: "wmcenter.png",
      link: "https://wmcenter.id"
    },
    {
      title: "UNISRI LIK",
      description: "Website for innovation & entrepreneurship programs at UNISRI. Streamlines event registration and participant management.",
      image: "lik.png",
      link: "https://lik-unisri.com/"
    },
    {
      title: "UNISRI LSP",
      description: "Certification management platform for professional exams. Users can register, track progress, and view certification results.",
      image: "lsp.png",
      link: "https://lsp-unisri.com/"
    },
    {
      title: "Health Tracker",
      description: "MERN Stack health tracking app for calories, exercise, and personalized recommendations.",
      image: "rpl.png",
      link: "https://github.com/AbrahamWillemH/project-rpl-2"
    },
    {
      title: "Portal Prestasi",
      description: "Laravel-based platform for events & scholarships discovery, registration, and admin management.",
      image: "portalprestasi.png",
      link: "https://github.com/AbrahamWillemH/PortalPrestasi"
    },
    {
      title: "Little Game Project",
      description: "Tower Defense game built with Greenfoot featuring waves, upgrades, and strategic gameplay.",
      image: "greenfoot.png",
      link: "https://www.greenfoot.org/scenarios/32214"
    },
    {
      title: "Turing Machine Simulator",
      description: "Web-based multitape Turing Machine simulator for solving (m+n)^a/b using Flask & JS.",
      image: "tba.png",
      link: "https://project-tba-uas.vercel.app/"
    },
    {
      title: "Payroll Management System",
      description: "Microsoft Access-based payroll system with attendance, overtime, deductions, and payslip generation.",
      image: "payrollmanagement.png"
    },
    {
      title: "Dataset Analysis",
      description: "Bike-sharing dataset analysis using Python, Pandas, Matplotlib & Seaborn to uncover usage trends.",
      image: "bikesharing.png",
      link: "https://github.com/AbrahamWillemH/dicoding-project-bike-rental"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Description Section - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-7xl md:text-8xl font-bold text-white">
                ✷PROJECTS✷
              </h2>
              <h3 className="text-4xl font-bold text-white">
                {projects[currentIndex].title}
              </h3>
              <div
                className="text-slate-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: projects[currentIndex].description }}
              />
              {projects[currentIndex].link && (
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    transition-all duration-300 overflow-hidden group text-sm sm:text-base hover:cursor-pointer
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-lg
                    border-2 border-gray-300 text-gray-300 
                    hover:border-cyan-400 hover:text-cyan-400 
                    hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-110
                  "
                >
                  Visit Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Carousel - Right Side */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-slate-400 font-medium">
              {currentIndex + 1} / {projects.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';

import Lanyard from '@/components/ui/Lanyard'
import PixelBlast from '@/components/ui/PixelBlast';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  hoverText?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  hoverText
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group text-sm sm:text-base hover:cursor-pointer";
  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110"
    : "border-2 border-gray-300 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-110";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative block h-5 sm:h-6 overflow-hidden">
        <span
          className={`block transition-transform duration-300 ${isHovered ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
          {children}
        </span>
        <span
          className={`absolute left-0 top-full w-full transition-transform duration-300 ${isHovered ? '-translate-y-full underline' : 'translate-y-0'
            }`}
        >
          {hoverText || children}
        </span>
      </span>

      {/* Shine effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </button>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-2.5 sm:p-3 rounded-full border-2 border-gray-700 text-gray-400 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'
        }`}
      style={{
        ['--social-color' as string]: color
      }}
    >
      <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {React.cloneElement(icon as React.ReactElement,)}
      </div>
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `var(--social-color)`,
          boxShadow: `0 0 20px var(--social-color)`
        }}
      />
    </a>
  );
};

export default function Hero() {
  const socialLinks = [
    {
      href: 'https://github.com/AbrahamWillemH',
      icon: <Github size={18} className="sm:w-5 sm:h-5" />,
      label: 'GitHub',
      color: '#333'
    },
    {
      href: 'https://linkedin.com/',
      icon: <Linkedin size={18} className="sm:w-5 sm:h-5" />,
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      href: 'https://wa.me/6285800738654',
      icon: <MessageCircle size={18} className="sm:w-5 sm:h-5" />,
      label: 'WhatsApp',
      color: '#25D366'
    },
    {
      href: 'https://instagram.com/abraham_willemh',
      icon: <Instagram size={18} className="sm:w-5 sm:h-5" />,
      label: 'Instagram',
      color: '#E4405F'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - PixelBlast */}
      <div className="absolute inset-0 -z-10">
        <PixelBlast />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-4 w-full relative z-10 py-20 md:py-0">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mobile: Lanyard First */}
          <div className="md:hidden w-full h-[300px] relative">
            <Lanyard fov={10} position={[0, 0, 20]} />
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="space-y-2 zen-dots-regular">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left">
                <span className="text-gray-200">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Abe
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-center md:text-left text-gray-300 leading-relaxed play-regular">
              I'm a Backend and DevOps engineer passionate about building scalable and reliable systems.
              I specialize in developing APIs with Gin and NestJS, managing PostgreSQL databases,
              and integrating real-time communication with WebSockets.
            </p>

            <p className="text-base sm:text-lg text-gray-300 text-center md:text-left play-regular">
              On the DevOps side, I focus on mastering CI/CD pipelines and deploying applications with Kubernetes,
              ensuring smooth and automated software delivery from development to production.
            </p>

            <div className="flex flex-row gap-3 sm:gap-4 pt-4 items-center justify-center md:justify-start">
              <AnimatedButton variant="primary" hoverText="Take a Look!">
                Check My CV!
              </AnimatedButton>
              <AnimatedButton variant="secondary" hoverText="See my work">
                View projects
              </AnimatedButton>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 pt-2 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  color={link.color}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Lanyard on Right - Hidden on Mobile */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Absolute Lanyard - Desktop Only */}
      <div className="hidden md:block absolute right-0 top-0 z-30 h-full w-1/2 pointer-events-auto">
        <Lanyard fov={15} position={[0, 0, 20]} />
      </div>
    </div>
  );
}

import { Github, Linkedin, MessageCircle, Instagram, Mail } from 'lucide-react';

export const EMAIL = 'hello@abe.dev'; // TODO: replace with your real email

export const CV_URL = '/cv.pdf'; // drop your CV into public/cv.pdf

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/hanbeex',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abraham-hersubagyo-a49377303/',
    icon: Linkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6285800738654',
    icon: MessageCircle,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/abraham_willemh',
    icon: Instagram,
  },
];

export const contactCtas = [
  {
    label: 'Email Me',
    href: `mailto:${EMAIL}`,
    icon: Mail,
    primary: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6285800738654',
    icon: MessageCircle,
    primary: false,
  },
];

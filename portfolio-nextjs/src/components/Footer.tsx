'use client';

import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:moyobradley7@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/auren-bradley-moyo-kamdem-a6a052268/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Mkbrad77',
      icon: Github,
    },
    {
      name: 'Phone',
      href: 'tel:+33609709851',
      icon: Phone,
    },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Auren Moyo
            </p>
            <p className="text-gray-500 text-xs mt-1">
{t.footer.subtitle}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

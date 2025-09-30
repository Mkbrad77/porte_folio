'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isEnglish, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Prevent hydration mismatch by showing default state
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                AM
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline space-x-16">
                {['Accueil', 'À propos', 'Compétences', 'Projets', 'Expérience', 'Certifications', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace('à', 'a').replace('é', 'e').replace('è', 'e').replace('ô', 'o')}`}
                    className="text-gray-300 hover:text-blue-400 px-6 py-4 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-base flex items-center space-x-3 shadow-lg">
                <Globe className="h-5 w-5" />
                <span className="text-lg">FR</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  const navigation = [
    { name: 'Accueil', href: '#hero', en: 'Home' },
    { name: 'À propos', href: '#about', en: 'About' },
    { name: 'Compétences', href: '#skills', en: 'Skills' },
    { name: 'Projets', href: '#projects', en: 'Projects' },
    { name: 'Expérience', href: '#experience', en: 'Experience' },
    { name: 'Certifications', href: '#certifications', en: 'Certifications' },
    { name: 'Contact', href: '#contact', en: 'Contact' },
  ];


  return (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-modern-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="#hero" className="text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300">
                AM
              </Link>
            </div>

          {/* Language Toggle - Always visible and prominent */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
              title={isEnglish ? 'Switch to French' : 'Passer en anglais'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe className="h-6 w-6 text-white relative z-10" />
              <span className="text-lg font-bold text-white relative z-10">{isEnglish ? 'FR' : 'EN'}</span>
            </button>

            {/* Menu button - Always visible */}
            <div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-6 py-3 glass rounded-xl hover:shadow-modern transition-all duration-300 group flex items-center space-x-2"
              >
                <span className="text-white font-semibold text-sm">
                  {isMobileMenuOpen ? (isEnglish ? 'Close' : 'Fermer') : (isEnglish ? 'Menu' : 'Menu')}
                </span>
                {/* Hamburger lines */}
                <div className="flex flex-col space-y-1">
                  <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu - Always visible when open */}
        <div className={`transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass border-t border-white/10">
            <div className="px-6 py-8 space-y-4">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                  {isEnglish ? item.en : item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';

interface LanguageContextType {
  isEnglish: boolean;
  toggleLanguage: () => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = !isEnglish;
    setIsEnglish(newLanguage);
    localStorage.setItem('language', newLanguage ? 'en' : 'fr');
  };

  // Utiliser les traductions manuelles (parfaites et fiables)
  const t = isEnglish ? translations.en : translations.fr;

  return (
    <LanguageContext.Provider value={{ 
      isEnglish, 
      toggleLanguage, 
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

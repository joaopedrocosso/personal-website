'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextType {
  activeSection: string;
  handleScroll: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = (id: string) => {
    if (id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollEvents = () => {
    const sections = ['about', 'experience', 'projects', 'tech-stack'];
    let found = '';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        if (isInViewport) {
          found = section;
          break;
        }
      }
    }
    setActiveSection(found);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvents);
    handleScrollEvents();

    return () => {
      window.removeEventListener('scroll', handleScrollEvents);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

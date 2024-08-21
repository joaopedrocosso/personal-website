import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioNavProps {
  activeSection: string;
  handleScroll: (id: string) => void;
}

const PortfolioNav: React.FC<PortfolioNavProps> = ({ activeSection, handleScroll }) => {
  return (
    <motion.nav 
      className="lg:flex hidden lg:flex-col text-white-2 tracking-wide items-start gap-4 py-16 font-bold text-sm"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
    >
      <button
        onClick={() => handleScroll('about')}
        className={`transition-all ${activeSection === 'about' ? 'text-white-1' : 'hover:text-white-1'}`}
        
      >
        ABOUT
      </button>
      <button
        onClick={() => handleScroll('experience')}
        className={`transition-all ${activeSection === 'experience' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        EXPERIENCE
      </button>
      <button
        onClick={() => handleScroll('projects')}
        className={`transition-all ${activeSection === 'projects' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        PROJECTS
      </button>

      <button
        onClick={() => handleScroll('tech-stack')}
        className={`transition-all ${activeSection === 'tech-stack' ? 'text-white-1' : 'hover:text-white-1'}`}
      >
        TECH STACK
      </button>
    </motion.nav>
  );
};

export default PortfolioNav;

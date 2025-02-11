'use client';

import LOGO_RED from "@/assets/LOGO_RED.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState('');

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      // Clear any existing underline when scroll starts
      setClickedLink('');
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = setTimeout(() => {
        // Add any timeout logic here if needed
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setClickedLink(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Acasă", href: "#home" },
    { label: "Despre Noi", href: "#about" },
    { label: "Tarife", href: "#services" },
    { label: "Păreri", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-red-50 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-0 sm:px-2 lg:px-4 max-w-[1800px]">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105 pl-4">
            <LOGO_RED className="h-8 w-auto sm:h-10 md:h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-[850px]:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                onClick={(e) => handleScrollTo(e, item.href.replace('#', ''))} 
                href={item.href} 
                className="group text-gray-700 transition-colors font-medium relative py-2"
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF0000] transition-all duration-300 ${
                  clickedLink === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <a 
              href="tel:0725629585"
              className="bg-[#FF0000] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#E60000] transition-all duration-300"
            >
              Sună acum
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="min-[850px]:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <div className={`h-6 w-6 text-[#FF0000] transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`min-[850px]:hidden fixed left-0 right-0 top-[64px] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="mx-4 py-4 space-y-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg text-center">
            {navItems.map((item) => (
              <a 
                key={item.label}
                onClick={(e) => {
                  handleScrollTo(e, item.href.replace('#', ''));
                  setIsMenuOpen(false);
                }} 
                href={item.href} 
                className="group block text-gray-700 hover:text-[#FF0000] font-medium relative py-2 px-4"
              >
                <span className="relative z-10 inline-block">{item.label}</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#FF0000] transition-all duration-300 ${
                  clickedLink === item.href.replace('#', '') ? 'w-16' : 'w-0 group-hover:w-16'
                }`}></span>
              </a>
            ))}
            <a 
              href="tel:0725629585"
              className="block bg-[#FF0000] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#E60000] transition-all duration-300 mx-4 text-center"
            >
              Sună acum
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

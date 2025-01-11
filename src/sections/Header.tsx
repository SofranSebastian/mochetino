'use client';

import Logo from "@/assets/LOGO_RED.svg";
import MenuIcon from "@/assets/MenuIcon.svg";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="sticky top-0 z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-red-50 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-0 sm:px-2 lg:px-4 max-w-[1800px]">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105 pl-4">
            <Logo className="h-8 w-auto sm:h-10 md:h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a onClick={handleScrollToHome} href="#home" className="group text-gray-700 transition-colors font-medium relative py-2 cursor-pointer">
              <span className="relative z-10">Acasă</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group text-gray-700 transition-colors font-medium relative py-2">
              <span className="relative z-10">Despre noi</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group text-gray-700 transition-colors font-medium relative py-2">
              <span className="relative z-10">Servicii</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="group text-gray-700 transition-colors font-medium relative py-2">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="tel:0725629585"
              className="bg-[#FF0000] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#E60000] transition-all duration-300"
            >
              Sună acum
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <MenuIcon className={`h-6 w-6 text-[#FF0000] fill-[#FF0000] transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed left-0 right-0 top-[64px] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="mx-4 py-4 space-y-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg text-center">
            <a onClick={handleScrollToHome} href="#home" className="group block text-gray-700 hover:text-[#FF0000] font-medium relative py-2 px-4">
              <span className="relative z-10 inline-block">Acasă</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-12"></span>
            </a>
            <a href="#" className="group block text-gray-700 hover:text-[#FF0000] font-medium relative py-2 px-4">
              <span className="relative z-10 inline-block">Despre noi</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-20"></span>
            </a>
            <a href="#" className="group block text-gray-700 hover:text-[#FF0000] font-medium relative py-2 px-4">
              <span className="relative z-10 inline-block">Servicii</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-16"></span>
            </a>
            <a href="#" className="group block text-gray-700 hover:text-[#FF0000] font-medium relative py-2 px-4">
              <span className="relative z-10 inline-block">Contact</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF0000] transition-all duration-300 group-hover:w-16"></span>
            </a>
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

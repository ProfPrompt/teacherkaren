import React, { useState } from 'react';
import { Menu, X, Languages, Palette, Check } from 'lucide-react';
import { Language, THEMES } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: {
    home: string;
    about: string;
    courses: string;
    features: string;
    payments: string;
    faq: string;
    contact: string;
    bookNow: string;
    bookFree: string;
  };
  currentTheme: number;
  setCurrentTheme: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, content, currentTheme, setCurrentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobileThemeMenuOpen, setIsMobileThemeMenuOpen] = useState(false);

  // Home is hidden, but About is added back after Courses
  const navItems = [
    { name: content.features, href: '#features' },
    { name: content.courses, href: '#courses' },
    { name: content.about, href: '#about' },
    { name: content.payments, href: '#payments' },
    { name: content.faq, href: '#faq' },
    { name: content.contact, href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
             {/* Logo now links to home */}
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
                Teacher Karen
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-slate-600 hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Selector Desktop */}
            <div className="relative">
                <button
                    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                    className="flex items-center space-x-1 text-slate-600 hover:text-primary px-2 py-2 rounded-md transition-colors"
                    title="Change Theme"
                >
                    <Palette size={20} />
                </button>
                {isThemeMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[80vh] overflow-y-auto">
                        {THEMES.map((theme, index) => (
                            <button
                                key={theme.name}
                                onClick={() => {
                                    setCurrentTheme(index);
                                    setIsThemeMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <span 
                                        className="w-4 h-4 rounded-full mr-3 border border-gray-200" 
                                        style={{ backgroundColor: theme.primary }}
                                    ></span>
                                    {theme.name}
                                </div>
                                {currentTheme === index && <Check size={16} className="text-primary" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-600 hover:text-primary px-2 py-2 rounded-md transition-colors"
                title="Switch Language"
            >
                <Languages size={20} />
                <span className="text-sm font-medium">{language === 'en' ? '中文' : 'English'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-primary hover:bg-sky-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-primary/30"
            >
              {content.bookNow}
            </a>
          </div>

          {/* Mobile Menu & Controls */}
          <div className="lg:hidden flex items-center space-x-4">
             {/* Mobile Theme Switcher Dropdown */}
             <div className="relative">
                <button
                    onClick={() => setIsMobileThemeMenuOpen(!isMobileThemeMenuOpen)}
                    className="text-slate-600 hover:text-primary"
                    title="Select Theme"
                >
                    <Palette size={20} />
                </button>
                 {isMobileThemeMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[60vh] overflow-y-auto z-50">
                        {THEMES.map((theme, index) => (
                            <button
                                key={theme.name}
                                onClick={() => {
                                    setCurrentTheme(index);
                                    setIsMobileThemeMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <span 
                                        className="w-4 h-4 rounded-full mr-3 border border-gray-200" 
                                        style={{ backgroundColor: theme.primary }}
                                    ></span>
                                    {theme.name}
                                </div>
                                {currentTheme === index && <Check size={16} className="text-primary" />}
                            </button>
                        ))}
                    </div>
                )}
             </div>

             <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-slate-600"
            >
                <span className="text-sm font-bold">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block text-slate-600 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block bg-primary text-white text-center mt-4 px-3 py-2 rounded-md text-base font-medium"
            >
              {content.bookFree}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
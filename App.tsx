import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import About from './components/About';
import Payments from './components/Payments';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTENT, Language, THEMES } from './constants';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState(0);
  const content = CONTENT[language];

  useEffect(() => {
    const theme = THEMES[currentTheme];
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--font-sans', theme.font);
  }, [currentTheme]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        content={content.nav}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <main>
        <Hero content={content.hero} />
        <Features content={content.features} />
        <Courses content={content.courses} />
        <About content={content.about} />
        <Payments content={content.payments} />
        <FAQ content={content.faq} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default App;
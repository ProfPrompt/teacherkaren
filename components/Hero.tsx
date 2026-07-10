import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../constants';

interface HeroProps {
  content: {
    certified: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="scroll-mt-24 relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold">
              <Star size={16} className="fill-current" />
              <span>{content.certified}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              {content.titlePrefix} <span className="text-primary">{content.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-sky-700 transition-all shadow-lg shadow-sky-500/30 group"
              >
                {content.ctaPrimary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#features"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-amber-200/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] flex items-center justify-center bg-white">
                <img 
                    src={IMAGES.teacherPhoto} 
                    alt="Teacher Karen" 
                    className="w-full h-full object-contain p-2"
                />
            </div>
             {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
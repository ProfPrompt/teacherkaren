import React from 'react';

interface FooterProps {
  content: {
    rights: string;
    tagline: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">Teacher Karen</span>
            <p className="mt-2 text-sm">{content.tagline}</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p>&copy; {new Date().getFullYear()} www.teacherkaren.xyz</p>
            <p className="text-sm mt-1">{content.rights}</p>
            <p className="text-sm mt-1">Designed by <a href="https://askandrew.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">askandrew</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
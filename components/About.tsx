import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AboutProps {
  content: {
    title: string;
    badges: string[];
    name: string;
    bio1: string;
    bio2: string;
    bio3: string;
  };
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-5 bg-primary text-white p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
              <ul className="space-y-4">
                {content.badges.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 text-yellow-400" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-7 p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{content.name}</h3>
              <div className="prose prose-slate text-slate-600">
                <p className="mb-4">
                  {content.bio1}
                </p>
                <p className="mb-4">
                  {content.bio2}
                </p>
                <p>
                  {content.bio3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
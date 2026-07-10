import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface FeaturesProps {
  content: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section id="features" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{content.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">{feature.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { IMAGES } from '../constants';
import { Globe } from 'lucide-react';

interface PaymentsProps {
  content: {
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
  };
}

const Payments: React.FC<PaymentsProps> = ({ content }) => {
  return (
    <section id="payments" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-2 bg-slate-100 rounded-full text-primary">
                    <Globe size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{content.title}</h2>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-12">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
                    {content.steps.map((step, idx) => (
                         <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                            <div className="font-semibold text-slate-900 mb-1">{step.title}</div>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 w-full max-w-md flex items-center justify-center h-32">
                    <img 
                        src={IMAGES.stripe} 
                        alt="Stripe Payments Banner" 
                        className="h-20 w-auto object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 w-full max-w-md flex items-center justify-center h-32">
                     <img 
                        src={IMAGES.weChatPay} 
                        alt="WeChat Pay" 
                        className="h-20 w-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
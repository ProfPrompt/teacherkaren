import React from 'react';
import { CONTACT_INFO, IMAGES } from '../constants';
import { Mail, MessageCircle, Phone } from 'lucide-react';

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    scanTitle: string;
    scanDesc: string;
    labels: {
      email: string;
      whatsapp: string;
      wechat: string;
    };
  };
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{content.title}</h2>
              <p className="text-blue-100 text-lg mb-12">
                {content.subtitle}
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">{content.labels.email}</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold hover:text-white/90">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">{content.labels.whatsapp}</p>
                    <p className="text-lg font-semibold">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">{content.labels.wechat}</p>
                    <p className="text-lg font-semibold">{CONTACT_INFO.wechat}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-16 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{content.scanTitle}</h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm inline-block mb-6">
                <img 
                    src={IMAGES.qrCode} 
                    alt="Teacher Karen WeChat QR Code" 
                    className="w-64 h-64 object-contain"
                    loading="lazy"
                />
              </div>
              <p className="text-slate-500 text-sm">{content.scanDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
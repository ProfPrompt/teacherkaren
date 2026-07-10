import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CourseItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface CoursesProps {
  content: {
    title: string;
    subtitle: string;
    items: CourseItem[];
  };
}

const Courses: React.FC<CoursesProps> = ({ content }) => {
  return (
    <section id="courses" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{content.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{course.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {course.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
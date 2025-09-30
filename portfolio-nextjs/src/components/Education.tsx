'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      title: t.education.epita.title,
      school: t.education.epita.school,
      period: t.education.epita.period,
      description: t.education.epita.description,
      type: 'current',
      level: t.education.epita.level,
    },
    {
      title: t.education.prepa.title,
      school: t.education.prepa.school,
      period: t.education.prepa.period,
      description: t.education.prepa.description,
      type: 'completed',
      level: t.education.prepa.level,
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              {t.education.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {t.education.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 shadow-modern-lg card-hover group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  {/* Level badge */}
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-5 w-5 text-blue-400 mr-2" />
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      edu.type === 'current' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {edu.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{edu.title}</h3>
                  
                  {/* School */}
                  <div className="flex items-center mb-4">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-blue-400 font-semibold text-lg">{edu.school}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center mb-6">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-400">{edu.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {edu.description}
                  </p>

                  {/* Status indicator */}
                  {edu.type === 'current' && (
                    <div className="mt-6 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-blue-400 text-sm font-medium">Formation en cours</span>
                    </div>
                  )}
                </div>

                {/* Visual element */}
                <div className="mt-6 md:mt-0 md:ml-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.education.summary.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.education.summary.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

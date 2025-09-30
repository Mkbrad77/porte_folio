'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: t.experience.devoteam.title,
      company: t.experience.devoteam.company,
      period: t.experience.devoteam.period,
      description: t.experience.devoteam.description,
      type: 'current',
    },
    {
      title: t.experience.blueEnerFreeze.title,
      company: t.experience.blueEnerFreeze.company,
      period: t.experience.blueEnerFreeze.period,
      description: t.experience.blueEnerFreeze.description,
      type: 'completed',
    },
    {
      title: t.experience.immar.title,
      company: t.experience.immar.company,
      period: t.experience.immar.period,
      description: t.experience.immar.description,
      type: 'completed',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
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
              {t.experience.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {t.experience.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    {/* Period badge */}
                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 text-blue-400 mr-2" />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === 'current' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center mb-4">
                      <Building className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-blue-400 font-semibold">{exp.company}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Status indicator */}
                    {exp.type === 'current' && (
                      <div className="mt-4 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-green-400 text-sm font-medium">{t.experience.status}</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.experience.summary.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.experience.summary.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

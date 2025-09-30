'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t.projects.fraudDetection.title,
      role: t.projects.fraudDetection.role,
      description: t.projects.fraudDetection.description,
      technologies: t.projects.fraudDetection.tech,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t.projects.dataEngineering.title,
      role: t.projects.dataEngineering.role,
      description: t.projects.dataEngineering.description,
      technologies: t.projects.dataEngineering.tech,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: t.projects.financialAI.title,
      role: t.projects.financialAI.role,
      description: t.projects.financialAI.description,
      technologies: t.projects.financialAI.tech,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t.projects.scraping.title,
      role: t.projects.scraping.role,
      description: t.projects.scraping.description,
      technologies: t.projects.scraping.tech,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
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
              {t.projects.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.role}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.projects.summary.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.projects.summary.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

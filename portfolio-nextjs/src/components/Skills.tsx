'use client';

import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Database, ToolCase, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      icon: Code,
      title: t.skills.programming.title,
      skills: t.skills.programming.items,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: t.skills.ai.title,
      skills: t.skills.ai.items,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: t.skills.data.title,
      skills: t.skills.data.items,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: t.skills.database.title,
      skills: t.skills.database.items,
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ToolCase,
      title: t.skills.tools.title,
      skills: t.skills.tools.items,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: t.skills.soft.title,
      skills: t.skills.soft.items,
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
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
              {t.skills.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 shadow-modern-lg card-hover group relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-4 py-2 glass text-gray-200 rounded-xl text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
            <div className="glass rounded-2xl p-10 shadow-modern-lg relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10"></div>
              
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                {t.skills.summary.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto relative z-10">
                {t.skills.summary.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-1000"></div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

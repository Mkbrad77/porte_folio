'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      label: t.about.contact.labels.email,
      value: t.about.contact.email,
      href: `mailto:${t.about.contact.email}`,
    },
    {
      icon: Phone,
      label: t.about.contact.labels.phone,
      value: t.about.contact.phone,
      href: `tel:${t.about.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: t.about.contact.labels.location,
      value: t.about.contact.location,
    },
    {
      icon: Calendar,
      label: t.about.contact.labels.availability,
      value: t.about.contact.availability,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
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
              {t.about.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-2 shadow-modern-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/20 backdrop-blur-sm">
                  <Image
                    src="/photo_profil.jpg"
                    alt="Auren Moyo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-500"></div>
              
              {/* Contact Info */}
              <div className="mt-12 space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center space-x-4 glass rounded-2xl p-4 hover:shadow-modern transition-all duration-300"
                    >
                      <Icon className="h-6 w-6 text-indigo-400" />
                      <div className="text-center">
                        <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-cyan-400 transition-colors duration-300 font-semibold"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white font-semibold">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
              {t.about.subtitle}
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {t.about.description1}
              </p>
              
              <p>
                {t.about.description2}
              </p>
              
              <p>
                {t.about.description3}
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">{t.about.keySkills}</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Deep Learning', 'SQL', 'Power BI', 'MLOps'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

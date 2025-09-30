'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();
  const certifications = [
    {
      title: t.certifications.devoteam.title,
      organization: t.certifications.devoteam.organization,
      date: t.certifications.devoteam.date,
      skills: t.certifications.devoteam.skills,
      logo: '/devoteam.png',
      link: 'http://eu.badgr.com/public/assertions/C9ClgKeeRiqjOU0PA9MV-A',
      status: 'completed',
    },
    {
      title: t.certifications.udemyDataScience.title,
      organization: t.certifications.udemyDataScience.organization,
      date: t.certifications.udemyDataScience.date,
      skills: t.certifications.udemyDataScience.skills,
      logo: '/logo_udemy.jpg',
      link: '/udemy_data_science.pdf',
      status: 'completed',
    },
    {
      title: t.certifications.aws.title,
      organization: t.certifications.aws.organization,
      date: t.certifications.aws.date,
      skills: t.certifications.aws.skills,
      logo: '/logo_aws.svg',
      link: '/Aws_Introduction_to_Cloud_101.png',
      status: 'completed',
    },
    {
      title: t.certifications.git.title,
      organization: t.certifications.git.organization,
      status: t.certifications.git.status,
      skills: t.certifications.git.skills,
      logo: '/logo_udemy.jpg',
    },
    {
      title: t.certifications.streamlit.title,
      organization: t.certifications.streamlit.organization,
      status: t.certifications.streamlit.status,
      skills: t.certifications.streamlit.skills,
      logo: '/logo_udemy.jpg',
    },
    {
      title: t.certifications.tensorflow.title,
      organization: t.certifications.tensorflow.organization,
      status: t.certifications.tensorflow.status,
      skills: t.certifications.tensorflow.skills,
      logo: '/logo_udemy.jpg',
    },
    {
      title: t.certifications.inrs.title,
      organization: t.certifications.inrs.organization,
      date: t.certifications.inrs.date,
      logo: '/logo_inrs.png',
      link: '/Attestation_de_reussite_Prevention_Sup_.pdf',
      status: 'completed',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
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
              {t.certifications.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {t.certifications.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 shadow-modern-lg card-hover group relative overflow-hidden flex flex-col"
            >
              {/* Logo and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  cert.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {cert.status === 'completed' ? 'Obtenu' : 'En cours'}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {cert.title}
              </h3>

              {/* Organization */}
              <div className="flex items-center mb-3">
                <Award className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">{cert.organization}</span>
              </div>

              {/* Date */}
              {cert.date && (
                <div className="flex items-center mb-4">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>
              )}

              {/* Skills */}
              {cert.skills && (
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.skills}
                </p>
              )}

              {/* Link */}
              {cert.link && (
                <a
                  href={cert.link}
                  target={cert.link.startsWith('http') ? '_blank' : undefined}
                  rel={cert.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
{t.certifications.viewCertificate}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.certifications.summary.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.certifications.summary.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

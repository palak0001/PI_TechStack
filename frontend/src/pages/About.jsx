import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Common.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'We are committed to delivering excellence in every project we undertake.'
    },
    {
      icon: '🤝',
      title: 'Client-Focused',
      description: 'Your success is our success. We work closely with you every step of the way.'
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'We stay ahead of industry trends to bring cutting-edge solutions.'
    },
    {
      icon: '⭐',
      title: 'Quality First',
      description: 'We never compromise on quality. Excellence is our standard.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business, goals, and target audience through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your unique needs and objectives.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Our team creates stunning designs and robust solutions using latest technologies.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures everything works perfectly before going live.'
    },
    {
      step: '05',
      title: 'Support & Growth',
      description: 'We provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-beige-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About PI TechStack
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate designers and developers dedicated to creating digital excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-96 mb-20"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop"
              alt="Team"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experience, and build lasting customer relationships.
              </p>
              <p className="text-lg text-gray-600">
                We believe in creating digital experiences that are not just beautiful, but also functional, accessible, and sustainable for the future.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To become the most trusted digital agency, recognized for innovation, quality, and client success across the globe.
              </p>
              <p className="text-lg text-gray-600">
                We envision a world where businesses of all sizes have access to world-class digital solutions that help them succeed in the digital age.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-full">
                  <Card className="text-center h-full flex flex-col">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 flex-shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 transform translate-x-full w-4 h-1 bg-blue-600 -translate-y-1/2"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose PI TechStack
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {[
              {
                title: 'Experienced Team',
                desc: 'Our team brings years of industry experience and expertise to every project.'
              },
              {
                title: 'Proven Track Record',
                desc: 'We have successfully delivered 100+ projects with 98% client satisfaction rate.'
              },
              {
                title: 'Latest Technology',
                desc: 'We use cutting-edge tools and technologies to build future-proof solutions.'
              },
              {
                title: 'Full Transparency',
                desc: 'Clear communication and regular updates ensure you\'re always in the loop.'
              },
              {
                title: 'Dedicated Support',
                desc: 'We provide ongoing support even after project completion.'
              },
              {
                title: 'Competitive Pricing',
                desc: 'Premium quality solutions at competitive prices without hidden costs.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

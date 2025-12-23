import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Modal, Badge } from '../components/Common.jsx';
import { servicesData } from '../data/content.js';

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

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-beige-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-custom text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.slice(0, 3).map((tool) => (
                        <Badge key={tool} variant="primary">
                          {tool}
                        </Badge>
                      ))}
                      {service.tools.length > 3 && (
                        <Badge variant="primary">+{service.tools.length - 3}</Badge>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-blue-600 font-bold hover:text-blue-700 transition-smooth"
                  >
                    View Details →
                  </button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name}
      >
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">About This Service</h3>
              <p className="text-gray-600">{selectedService.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.tools.map((tool) => (
                  <Badge key={tool} variant="primary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sample Projects */}
            {selectedService.projects && selectedService.projects.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedService.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-lg overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-cover mb-3 rounded-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-2">{project.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="beige">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-beige-200">
              <p className="text-gray-600 mb-4">
                Interested in this service? Let's discuss how we can help your business.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-smooth"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </Modal>

      {/* Why These Services */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Our Services Matter
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
                title: 'Expert Team',
                desc: 'Our specialists have years of experience in their respective fields.'
              },
              {
                title: 'Tailored Solutions',
                desc: 'We customize every service to match your specific business needs.'
              },
              {
                title: 'Quality Assurance',
                desc: 'Rigorous testing and quality checks ensure excellence in every deliverable.'
              },
              {
                title: 'Support & Maintenance',
                desc: 'We provide ongoing support to ensure your solutions continue to work optimally.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    {index + 1}
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

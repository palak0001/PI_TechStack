import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/Common.jsx';
import { servicesData, projectsData, testimonialsData } from '../data/content.js';

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

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-gradient-to-br from-white via-blue-50 to-beige-50 flex items-center">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Excellence
                <span className="block text-blue-600">for Your Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We craft premium digital experiences that drive growth. From stunning websites to intuitive designs, we deliver results.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg">View Projects</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full flex items-center justify-center"
            >
              <svg className="w-full h-full max-w-2xl" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circle */}
                <circle cx="200" cy="200" r="190" fill="#f0f4ff" />
                
                {/* Computer/Laptop Illustration */}
                <g>
                  {/* Screen */}
                  <rect x="80" y="100" width="240" height="160" rx="8" fill="#1e40af" />
                  <rect x="85" y="105" width="230" height="150" rx="4" fill="#3b82f6" />
                  
                  {/* Content on screen - bars */}
                  <rect x="100" y="120" width="120" height="8" rx="4" fill="#60a5fa" opacity="0.7" />
                  <rect x="100" y="135" width="180" height="6" rx="3" fill="#93c5fd" opacity="0.6" />
                  <rect x="100" y="150" width="180" height="6" rx="3" fill="#93c5fd" opacity="0.6" />
                  <rect x="100" y="165" width="140" height="6" rx="3" fill="#93c5fd" opacity="0.6" />
                  <rect x="100" y="180" width="160" height="6" rx="3" fill="#93c5fd" opacity="0.6" />
                  <rect x="100" y="195" width="120" height="6" rx="3" fill="#93c5fd" opacity="0.6" />
                  
                  {/* Laptop base */}
                  <path d="M 70 270 L 330 270 L 310 285 L 90 285 Z" fill="#374151" />
                  <rect x="75" y="270" width="250" height="8" rx="2" fill="#4b5563" />
                </g>
                
                {/* Floating elements - cards */}
                <g>
                  {/* Card 1 */}
                  <g transform="translate(50, 180)">
                    <rect width="80" height="60" rx="6" fill="#fbbf24" opacity="0.9" />
                    <circle cx="20" cy="15" r="8" fill="#f59e0b" />
                    <rect x="35" y="10" width="35" height="4" rx="2" fill="#f59e0b" />
                    <rect x="35" y="18" width="30" height="3" rx="1" fill="#f59e0b" opacity="0.6" />
                  </g>
                  
                  {/* Card 2 */}
                  <g transform="translate(290, 150)">
                    <rect width="80" height="60" rx="6" fill="#34d399" opacity="0.9" />
                    <circle cx="20" cy="15" r="8" fill="#10b981" />
                    <rect x="35" y="10" width="35" height="4" rx="2" fill="#10b981" />
                    <rect x="35" y="18" width="30" height="3" rx="1" fill="#10b981" opacity="0.6" />
                  </g>
                  
                  {/* Card 3 */}
                  <g transform="translate(150, 50)">
                    <rect width="80" height="60" rx="6" fill="#a78bfa" opacity="0.9" />
                    <circle cx="20" cy="15" r="8" fill="#8b5cf6" />
                    <rect x="35" y="10" width="35" height="4" rx="2" fill="#8b5cf6" />
                    <rect x="35" y="18" width="30" height="3" rx="1" fill="#8b5cf6" opacity="0.6" />
                  </g>
                </g>
                
                {/* Decorative elements */}
                <circle cx="100" cy="80" r="3" fill="#3b82f6" opacity="0.4" />
                <circle cx="350" cy="320" r="2" fill="#3b82f6" opacity="0.4" />
                <circle cx="50" cy="300" r="2.5" fill="#3b82f6" opacity="0.4" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link to="/services">
                  <Card className="h-full cursor-pointer">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600">{service.shortDesc}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="secondary" size="lg">
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcase of our latest work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.slice(0, 3).map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <Badge variant="primary">{project.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="beige">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button size="lg">View All Projects</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonialsData.slice(0, 3).map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.message}"</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/testimonials">
              <Button variant="secondary" size="lg">
                Read More Testimonials
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Contact us today to discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100 hover:text-blue-800">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

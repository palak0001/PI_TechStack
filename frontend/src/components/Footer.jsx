import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Website Development', path: '/services' },
        { name: 'UI/UX Design', path: '/services' },
        { name: 'Logo Design', path: '/services' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Get in Touch', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-beige-50 border-t border-beige-200">
      <div className="container-custom py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-blue-600 mb-4">PI TechStack</h3>
            <p className="text-gray-600">
              Creating premium digital experiences for modern businesses.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-125 transition-transform"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-gray-800 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-beige-200 pt-8">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="text-gray-700 font-semibold mb-2">📧 Email</p>
            <a
              href="mailto:pitechstack@gmai.com"
              className="text-blue-600 hover:underline"
            >
              pitechstack@gmai.com
            </a>
            <p className="text-gray-700 font-semibold mt-4 mb-2">📱 WhatsApp (Only Message)</p>
            <a
              href="tel:+91 78629 64719"
              className="text-blue-600 hover:underline"
            >
              +91 78629 64719
            </a>
          </motion.div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm border-t border-beige-200 pt-6">
            <p>© {currentYear} PI TechStack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

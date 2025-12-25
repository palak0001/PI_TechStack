import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Button } from '../components/Common.jsx';
import { API_ENDPOINTS } from '../config/api.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(API_ENDPOINTS.CONTACT_SUBMIT, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message || 'Your message has been sent successfully!'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: response.data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // If backend returned validation errors (array), extract and show them
      const validationErrors = error.response?.data?.errors;
      if (Array.isArray(validationErrors) && validationErrors.length > 0) {
        const messages = validationErrors.map(err => err.msg).join(' ');
        setStatus({ type: 'error', message: messages });
      } else {
        setStatus({
          type: 'error',
          message: error.response?.data?.message || 'Failed to send message. Please try again later.'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'pitechstack@gmail.com',
      href: 'mailto:pitechstack@gmail.com.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp (Only Message)',
      value: '+91 78629 64719',
      href: 'tel:+91 78629 64719'
    },
    {
      icon: '📍',
      title: 'Address',
      value: 'Gujarat,India',
      href: '#'
    },
    {
      icon: '⏰',
      title: 'Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: '#'
    }
  ];

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
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Let's discuss your project and see how we can help.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="text-3xl flex-shrink-0">{info.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-smooth">
                        {info.title}
                      </p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: '📷', name: 'Instagram', url: 'https://instagram.com' },
                    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-3xl"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-beige-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-beige-300 focus:border-blue-600 focus:outline-none transition-smooth"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-beige-300 focus:border-blue-600 focus:outline-none transition-smooth"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 rounded-lg border border-beige-300 focus:border-blue-600 focus:outline-none transition-smooth"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-beige-300 focus:border-blue-600 focus:outline-none transition-smooth resize-none"
                    ></textarea>
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     

    </div>
  );
};

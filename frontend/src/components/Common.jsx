import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, className = '', variant = 'primary', size = 'md', ...props }) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-beige-100 text-blue-600 hover:bg-beige-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    white: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-lg font-semibold transition-smooth ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      layout
      whileHover={hover ? { y: -8, scale: 1.01, boxShadow: '0 20px 40px rgba(2,6,23,0.08)' } : {}}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`bg-white rounded-lg border border-beige-200 p-6 shadow-soft transition-smooth will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto ring-1 ring-black ring-opacity-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-beige-200 p-6 flex justify-between items-center">
          {title && <h2 className="text-2xl font-bold text-blue-600">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Badge = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    beige: 'bg-beige-100 text-beige-800'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
};

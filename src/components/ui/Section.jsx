import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, className = '' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${className}`}
    >
      <h2 className="section-title">{title}</h2>
      {children}
    </motion.section>
  );
};

export default Section;
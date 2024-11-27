import React from 'react';
import { motion } from 'framer-motion';

const SplitAnimation = ({ onAnimationComplete }) => {
  return (
    <>
      <motion.div
        initial={{ height: '50vh' }}
        animate={{ height: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
        onAnimationComplete={onAnimationComplete}
        className="split-panel split-panel-top"
      />
      <motion.div
        initial={{ height: '50vh' }}
        animate={{ height: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
        className="split-panel split-panel-bottom"
      />
    </>
  );
}

export default SplitAnimation;
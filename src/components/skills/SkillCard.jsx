import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaReact } from 'react-icons/fa'; // Example icons
import Card from '../ui/Card';

const SkillCard = ({ skill }) => {
  // Default icons for some skills
  const skillIcons = {
    React: <FaReact className="text-blue-500 text-4xl mb-2" />,
    JavaScript: <FaCode className="text-yellow-500 text-4xl mb-2" />,
    Blockchain: <FaDatabase className="text-green-500 text-4xl mb-2" />,
    AI: <FaRobot className="text-purple-500 text-4xl mb-2" />,
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 rounded-lg text-center bg-gray-800 hover:bg-gray-700 transition duration-300">
        {/* Display an icon if available */}
        {skillIcons[skill.name] || (
          <div className="text-gray-500 text-4xl mb-2">🌟</div>
        )}
        {/* Skill name */}
        <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
        {/* Skill description */}
        <p className="text-sm text-gray-300">{skill.description || 'No description available.'}</p>
      </Card>
    </motion.div>
  );
};

export default SkillCard;

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="rounded-lg overflow-hidden bg-gray-800 hover:shadow-lg transition-shadow duration-300">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>

          {/* Call-to-action Buttons */}
          <div className="flex justify-between items-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all duration-300"
            >
              View Demo
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Scene from './3d/Scene';

const ProfileHeader = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="relative h-screen flex items-center justify-center"
    >
      <Scene />
      <div className="text-center z-10">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          src="/src/assets/image.png"  // Update the image source here
          alt="Profile"
          className="profile-image rounded-full border-4 border-gray-500"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="profile-title text-4xl font-bold text-white"
        >
          Madhan
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="profile-subtitle text-lg text-gray-300"
        >
          Computer Science and Engineering Student | Aspiring Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="profile-description text-md text-gray-400 mt-4"
        >
          Passionate about building impactful solutions using web technologies, blockchain, 
          and AI. Exploring the world of development, one project at a time.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="social-links mt-6 flex justify-center space-x-4"
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link text-white hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link text-white hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ProfileHeader;

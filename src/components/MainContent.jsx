import React from 'react';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="content-container py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm Madhan, a first-year Computer Science and Engineering student at SRM University, 
            expected to graduate in 2028. With a strong passion for technology, I specialize in building 
            intuitive and efficient web applications. My interests include exploring blockchain, 
            AI-driven solutions, and fitness-focused innovations. Currently, I am sharpening my skills 
            in React.js, full-stack development, and cutting-edge web technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'React.js',
              'HTML',
              'CSS',
              'JavaScript',
              'Blockchain',
              'AI',
              'Tailwind CSS',
              'Git',
              'Node.js',
              'MongoDB',
            ].map((skill) => (
              <div
                key={skill}
                className="card p-4 rounded-lg text-center bg-gray-800 text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Blockchain Authentication App',
                description:
                  'Decentralized authentication system using React.js, Ethereum, and Solidity.',
                image: 'https://via.placeholder.com/400x250?text=Blockchain+App',
              },
              {
                title: 'Comment Filtration for YouTube Studio',
                description:
                  'AI-driven app for comment analysis, spam filtering, and engagement optimization.',
                image: 'https://via.placeholder.com/400x250?text=Comment+Filtration',
              },
              {
                title: 'Fitness Coaching App',
                description:
                  'Personalized fitness plans and biometric integration for security.',
                image: 'https://via.placeholder.com/400x250?text=Fitness+App',
              },
            ].map((project, index) => (
              <div key={index} className="card rounded-lg overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default MainContent;

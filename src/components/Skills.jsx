import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Bootstrap', 'Git'];

const Skills = () => {
  return (
    <section id="skills" className="container py-5 bg-light">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {skills.map(skill => (
          <motion.div key={skill} className="col-6 col-md-3 mb-3">
            <motion.div className="card text-center p-3 shadow-sm"
              whileHover={{ scale: 1.1 }}
            >
              <div className="card-body">
                <h5 className="card-title">{skill}</h5>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

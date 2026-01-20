import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container py-5">
      <motion.h2 className="text-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>About Me</motion.h2>
      <motion.p className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        I am a passionate MERN Stack Developer with hands-on experience building responsive and interactive web applications. I enjoy turning ideas into reality using modern web technologies.
      </motion.p>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", tech: "React, Bootstrap, Framer Motion" },
  { name: "Expense Tracker", tech: "React, Node.js, MongoDB" },
  { name: "Blog Platform", tech: "MERN Stack" },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx }}
          >
            <div className="card shadow-lg border-0 p-3 h-100 text-center">
              <h5 className="card-title fw-bold">{project.name}</h5>
              <p className="card-text text-muted">{project.tech}</p>
              <a href="#" className="btn btn-primary">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

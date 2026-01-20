import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">

      {/* LEFT */}
      <motion.div
        className="hero-left"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <span className="intro">Hello, I’m</span>

        <h1>
          Pavithra <br />
          <span>Sivakumar</span>
        </h1>

        <p>
          Aspiring MERN Stack Developer focused on building clean,
          responsive, and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <button className="primary">View Projects</button>
          <button className="outline">Download Resume</button>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="hero-right"
        initial={{ x: 120 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="semi-circle">
          <img src={profile} alt="Profile" />
        </div>
      </motion.div>

    </section>
  );
};

export default Home;

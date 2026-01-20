import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container d-flex justify-content-center">
        <motion.div
          className="card p-4 shadow-sm"
          style={{ maxWidth: "500px", width: "100%" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-center mb-4 fw-bold">Contact Me</h3>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

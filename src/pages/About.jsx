import React, { useState } from "react";
import { motion } from "framer-motion";
function About() {
  const [visible, setVisible] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="relative w-[90%] container mx-auto px-4">
      {/* Background Text */}
      <div
        className={`fixed inset-0 flex items-center justify-center pointer-events-none ${
          visible ? "opacity-10" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <p className="text-[122rem] font-bold text-white inline-block mx-auto">
          P
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 py-8 min-h-[90svh]">
        {/* Image Container */}
        <div
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="relative w-full md:w-1/3 lg:w-1/4 h-[50vh] mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-green-300 rounded-lg" />
          <img
            src="https://avatars.githubusercontent.com/u/163244136?v=4"
            alt="Profile"
            className="absolute w-full h-full object-cover rounded-lg transition-all duration-300 hover:translate-x-2 hover:-translate-y-2"
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-2/3 lg:w-3/5 space-y-4 text-base md:text-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>
            Hi, I am <b>Angad</b> Sudan, a first-year Bachelor of Engineering
            student specializing in Computer Science.
          </motion.p>

          <motion.p variants={itemVariants}>
            I'm passionate about the tech industry, with a particular focus on
            building client-ready websites integrated with AI-driven solutions.
            My interests lie in exploring the expansive realms of Machine
            Learning, web architecture, and innovative product development.
          </motion.p>

          <motion.p variants={itemVariants}>
            I'm driven by the excitement of building and delivering technology
            solutions that meet client needs. What sets me apart is my
            collaborative approach. I thrive in team environments, ensuring that
            we grow and succeed together, reaching new heights as a cohesive
            unit.
          </motion.p>

          <motion.p variants={itemVariants}>
            Whether you're a fellow tech enthusiast, a potential employer, or a
            future collaborator, I'd love to connect and exchange ideas. Feel
            free to reach out—I'm always open to discussions and opportunities
            to create something meaningful.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

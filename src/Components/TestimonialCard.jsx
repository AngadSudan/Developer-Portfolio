import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function TestimonialCard({
  index,
  profilePic = "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=8lmFJ68jo0AB02jBDHswcJjuh_YhQMKEC7nTrtgQ58I=",
  name,
  title,
  testimonial,
  linkedinUrl,
  githubUrl,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: 0.4 * index,
        type: "spring",
        bounce: 0.6,
      }}
      className="relative p-6 border-2 border-white/20 rounded-xl backdrop-blur-sm bg-slate-900/60 shadow-xl hover:border-white/40 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative flex justify-between items-start mx-auto w-[90%]">
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              backgroundImage: `url(${profilePic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-full h-20 w-20 border-2 border-white/20 shadow-lg"
            aria-label={`Profile picture of ${name}`}
          />
        </motion.div>

        <motion.div
          className="text-right"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-bold text-xl text-white mb-1">{name}</h2>
          <p className="text-blue-400 text-sm mb-2">{title}</p>

          <div className="flex gap-2 justify-end">
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-purple-400 transition-colors"
                aria-label={`${name}'s GitHub profile`}
              >
                <FaGithub className="text-white text-xl" />
              </motion.a>
            )}
            {linkedinUrl && (
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <FaLinkedin className="text-white text-xl" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div className="relative mt-6">
        <p className="text-white/80 text-center leading-relaxed tracking-wide">
          {testimonial}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default TestimonialCard;

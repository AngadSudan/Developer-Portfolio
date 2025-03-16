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
      className="bg-gradient-to-r from-[#051845] to-[#062056] mx-2 p-6 rounded-lg my-4 border-l-4 border-[#3b82f6] shadow-lg relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
    >
      {/* Background accent */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-green-300 opacity-10"></div>
      <div className="absolute top-10 -left-16 w-32 h-32 rounded-full bg-[#06b6d4] opacity-10"></div>

      <div className="flex items-center mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-green-300 rounded-full blur-md opacity-70"></div>
          <div className="relative p-1 bg-[#051845] rounded-full">
            <img
              src={profilePic}
              alt={name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-bold text-white">{name}</h1>
          <h2 className="text-lg text-gray-300">{title}</h2>
          <div className="flex mt-2 space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-300 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pr-2 custom-scrollbar">
        <div className="text-gray-200 italic relative">
          <span className="absolute -left-2 -top-2 text-4xl text-[#06b6d4] opacity-50">
            "
          </span>
          <p className="pl-6 pr-6">{testimonial}</p>
          <span className="absolute -right-2 bottom-0 text-4xl text-[#06b6d4] opacity-50">
            "
          </span>
        </div>
      </div>

      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#06b6d4] via-green-300 to-[#6366f1]"></div>
    </motion.div>
  );
}

export default TestimonialCard;

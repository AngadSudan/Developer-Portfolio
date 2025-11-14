import React from "react";
import HeroSection from "./typewrite";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

function Hero() {
  const [Visibility, setVisibility] = React.useState(false);
  return (
    <div className="relative min-h-screen grid place-items-center p-4 mb-24">
      <div className="w-full md:w-4/5 mx-auto h-[85%] my-auto flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 lg:pl-8">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-green-400 text-4xl sm:text-5xl md:text-6xl font-semibold">
            Hi There,
            <br />
            <span className="my-2 block">I Am Angad</span>
          </p>

          <HeroSection />
          <div className="flex mt-4 lg:mt-8 w-full sm:w-3/5 gap-4 sm:gap-6 lg:gap-12 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/angadsudan"
              className="text-2xl sm:text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AngadSudan"
              className="text-2xl sm:text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Angad_Sudan/"
              className="text-2xl sm:text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              <SiLeetcode />
            </a>
            <a
              href="mailto:angadsudan453@gmail.com"
              className="text-2xl sm:text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              <IoMdMail />
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-lg text-lg sm:text-xl bg-green-500 p-3 sm:p-4 hover:bg-green-600 transition-colors">
              <a
                href="https://res.cloudinary.com/djy3ewpb8/image/upload/v1763096139/resume_citapr.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
            <button
              onClick={() => setVisibility(true)}
              className="rounded-lg text-lg sm:text-xl bg-green-500 p-3 sm:p-4 hover:bg-green-600 transition-colors"
            >
              Get a Tip
            </button>
          </div>
        </div>

        {/* Right Section - Code Block */}
        <motion.div className="w-full p-1 lg:w-[60%] h-auto lg:h-[65%] sm:p-4 my-auto border-2 border-white rounded-lg">
          <div className="flex gap-3 flex-row-reverse mr-4 sm:mr-8 mt-2">
            <div className="bg-red-600 rounded-full h-4 sm:h-6 w-4 sm:w-6"></div>
            <div className="bg-yellow-600 rounded-full h-4 sm:h-6 w-4 sm:w-6"></div>
            <div className="bg-green-600 rounded-full h-4 sm:h-6 w-4 sm:w-6"></div>
          </div>

          <div className="w-full h-fit bg-black p-2 sm:p-3 mt-4 rounded-lg border-2 border-white overflow-x-auto">
            <pre className="hidden md:grid place-items-center text-sm sm:text-base">
              {`{
      name: "Angad Sudan",
      age: "18",
      location: "India",
      email: "angadsudan453@gmail.com",
      languages: ["English", "Hindi"],
      hobbies: ["Coding", "Reading", "Exploring"],
      education: {
        college: "Chitkara University",
      },
}`}
            </pre>
            <pre className="sm:hidden grid place-items-center text-sm sm:text-base">
              {`{
      name: "Angad Sudan",
      age: "18",
      location: "India",
      email: "angadsudan453@gmail.com",
      languages: ["English", "Hindi"],
      hobbies: [
        ["Coding"], 
        ["Reading"], 
        ["Exploring"]],
      education: {
        college: "Chitkara University",
      },
}`}
            </pre>
          </div>
        </motion.div>
      </div>
      <div
        className={`fixed inset-0 ${
          Visibility ? "flex" : "hidden"
        } bg-black/40 backdrop-blur-sm z-30 p-4`}
        onClick={() => setVisibility(false)}
      >
        <div
          className="relative m-auto w-full max-w-md rounded-xl bg-gradient-to-br 
                  from-blue-500/80 to-purple-500/90 
                  p-6 shadow-xl transition-all duration-300 scale-100
                  hover:shadow-purple-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setVisibility(false)}
            className="absolute right-4 top-4 text-3xl text-white/80 hover:text-white
                     transition-colors duration-200"
            aria-label="Close modal"
          >
            X
          </button>

          <div className="mt-4">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Tip from me<span className="inline-block animate-bounce">💡</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
              Focus on enjoying the process, and you'll uncover hidden gems on
              the journey that often go unnoticed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

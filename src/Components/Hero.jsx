import React from "react";
import HeroSection from "./typewrite";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
function Hero() {
  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full md:w-4/5 mx-auto h-[85%] my-auto flex">
        <div className="w-2/3 flex flex-col justify-center pl-8 ">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-green-400 text-6xl font-semibold">
            Hi There,
            <br /> <p className="my-2"> I Am Angad</p>
          </p>
          {/* TypeWriter Animation*/}
          <HeroSection />
          <div className="flex mt-4 lg:mt-8 w-3/5 md:w-full gap-6 lg:gap-12 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/angad-sudan/"
              className="text-4xl"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.gitub.com/angadsudan" className="text-4xl">
              <FaGithub />
            </a>
            <a href="https://www.leetcode.com/angadsudan/" className="text-4xl">
              <SiLeetcode />
            </a>
            <a href="mailto:angadsudan453@gmail.com" className="text-4xl">
              <IoMdMail />
            </a>
          </div>
          <div className="mt-6">
            <button className="rounded-lg mx-3 text-xl bg-green-500 p-4">
              <a
                href="/public/Resume.pdf"
                type="file"
                download="Angad_Sudan_Resume.pdf"
              >
                Resume
              </a>
            </button>
            <button className="rounded-lg mx-3 text-xl bg-green-500 p-4">
              <a
                href="https://youtu.be/Hl2DVLxB7R0?feature=shared"
                target="_blank"
                type="no-referer no-opener"
              >
                Get Hired
              </a>
            </button>
          </div>
        </div>
        <div className="w-[60%] h-[65%] p-4 my-auto border-2 border-white rounded-lg">
          <div className="flex gap-3 flex-row-reverse mr-8 mt-2">
            <div className="bg-red-600 rounded-full h-6 w-6"></div>
            <div className="bg-yellow-600 rounded-full h-6 w-6"></div>
            <div className="bg-green-600 rounded-full h-6 w-6"></div>
          </div>
          <div className="w-full h-fit bg-black p-3 mt-4 rounded-lg border-2 border-white">
            <pre className="grid place-items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

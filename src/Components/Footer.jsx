import React, { useState, useEffect } from "react";
import { SendHorizonal } from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import configure from "../conf/conf.js";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [backgroundElements, setBackgroundElements] = useState([]);

  const colors = ["#06b6d4", "#4ade80", "#22c55e"];

  // Generate non-overlapping background elements on first render
  useEffect(() => {
    const generateNonOverlappingElements = (count = 15) => {
      const elements = [];
      const minSize = 5; // rem
      const maxSize = 15; // rem
      const minDistance = 5; // percentage

      for (let i = 0; i < count; i++) {
        let newElement;
        let attempts = 0;
        let overlaps = true;

        // Try up to 100 attempts to place a non-overlapping element
        while (overlaps && attempts < 100) {
          attempts++;

          const size = Math.random() * (maxSize - minSize) + minSize;
          newElement = {
            id: i,
            size: size,
            left: Math.random() * (100 - size),
            top: Math.random() * (100 - size),
            color: colors[i % colors.length],
            animationDelay: Math.random() * 2,
            animationDuration: Math.random() * 5 + 5,
          };

          // Check if this element would overlap with any existing ones
          overlaps = elements.some((element) => {
            const xDist = Math.abs(element.left - newElement.left);
            const yDist = Math.abs(element.top - newElement.top);
            const minXDist = (element.size + newElement.size) / 2;
            const minYDist = (element.size + newElement.size) / 2;

            return xDist < minXDist && yDist < minYDist;
          });
        }

        // If we found a non-overlapping position, add the element
        if (!overlaps) {
          elements.push(newElement);
        }
      }

      return elements;
    };

    setBackgroundElements(generateNonOverlappingElements());
  }, []);

  const sendEmailjsReq = () => {
    if (!email) return;

    setIsSubmitting(true);
    emailjs
      .send(
        configure.service,
        configure.template,
        {
          to_email: "angadsudan453@gmail.com",
          from_name: "web_portfolio_visitor",
          message: `Hello ${email} tried contacting you`,
          to_from: `${email}`,
        },
        configure.userid
      )
      .then((response) => {
        setEmail("");
        setSubmitStatus("success");
        console.log("Email sent successfully!", response.status, response.text);
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .catch((err) => {
        setSubmitStatus("error");
        console.error("Failed to send email. Error:", err);
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1f2937] via-[#051845] to-[#1f2937] text-white py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: element.color,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
              left: `${element.left}%`,
              top: `${element.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: element.animationDuration,
              delay: element.animationDelay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl text-center lg:text-6xl font-bold mb-4">
              Angad Sudan
            </h1>
            <p className="block mx-auto text-xl text-center lg:text-2xl mb-6 max-w-lg">
              Full-stack developer passionate about building beautiful,
              functional web experiences.
            </p>
            <div className="flex w-fit mx-auto flex-wrap gap-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/angadsudan"
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                <div className="relative bg-[#062056] p-4 rounded-full">
                  <FaLinkedin className="text-3xl" />
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/AngadSudan"
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                <div className="relative bg-[#062056] p-4 rounded-full">
                  <FaGithub className="text-3xl" />
                </div>
              </motion.a>
              <motion.a
                href="https://youtu.be/xvFZjo5PgG0?feature=shared"
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                <div className="relative bg-[#062056] p-4 rounded-full">
                  <FaYoutube className="text-3xl" />
                </div>
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/Angad_Sudan/"
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                <div className="relative bg-[#062056] p-4 rounded-full">
                  <SiLeetcode className="text-3xl" />
                </div>
              </motion.a>
              <motion.a
                href="mailto:angadsudan453@gmail.com"
                className="group relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full opacity-75 group-hover:opacity-100 blur-md transition-all duration-300"></div>
                <div className="relative bg-[#062056] p-4 rounded-full">
                  <IoMdMail className="text-3xl" />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right section */}
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#6366f1] rounded-xl opacity-75 blur-md"></div>
              <div className="relative bg-[#051845] p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-6">
                  Have a project in mind or just want to say hello? Drop me a
                  message!
                </p>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-white text-black rounded-l-full p-3 w-full"
                  />
                  <button
                    onClick={sendEmailjsReq}
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting
                        ? "bg-gray-500"
                        : "bg-green-500 hover:bg-green-600"
                    } rounded-r-full w-16 flex justify-center items-center transition-colors duration-300`}
                  >
                    <SendHorizonal size={24} className="text-white" />
                  </button>
                </div>
                {submitStatus === "success" && (
                  <p className="text-green-400 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 mt-2">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent mb-8"></div>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Angad Sudan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;

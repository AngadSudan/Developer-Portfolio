import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const data = [
    {
      name: "Daksh",
      description:
        "Daksh is an all-in-one platform designed to enhance the academic experience by providing solution for managing study materials and facilitating seamless communication between students and teachers.",
      runningLink: "https://daksh-git-main-angadsudans-projects.vercel.app/",
      codeLink: "https://github.com/AngadSudan/Daksha",
      tags: ["#mern", "#genAI"],
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1735636860/i9nvabfe0igwpwqebkrl.png",
    },
    {
      name: "Hack With Her",
      description:
        "The all in one information platform regarding the HackWithHer hackathon organized by IEEE-CIET. generate me a description for project daksh",
      runningLink: "https://hack-with-her.in/",
      codeLink: "https://github.com/Soham2395/HackWithHer",
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1735637945/pemu90stp7myka9pc71q.png",
      tags: ["#mern", "#frontend"],
    },
    {
      name: "IEEE Website",
      description: "Helped in development of the official website of ieee-ciet",
      runningLink: "https://ieee-website-six.vercel.app/",
      codeLink: "https://ieee-website-six.vercel.app/",
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1735638125/owqol6jkkwjp0efasrrs.png",
      tags: ["#mern", "#fullstack", "#tailwindcss"],
    },
  ];

  return (
    <motion.div
      className="w-full min-h-screen p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <h1 className="text-6xl mb-2 text-green-200 font-bold text-center">
        Projects
      </h1>
      <h3 className="text-2xl mb-16 font-semibold text-center">
        Discover some of my <span className="text-green-200">Projects</span>
      </h3>
      <div className="w-fit md:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                runningLink={project.runningLink}
                codeLink={project.codeLink}
                tags={project.tags}
                thumbnail={project.thumbnail}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;

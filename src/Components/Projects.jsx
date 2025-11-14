import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects() {
  const data = [
    {
      name:"Octodock",
      description:"Octodock is an AI-powered developer tool that automates backend code generation, correction, and deployment readiness, with seamless GitHub integration for efficient, secure, and production-ready development."
      ,runningLink:"https://octodock.angadsudan.me",
      codeLink:"https://github.com/AngadSudan/Octodock",
      tags:["#mern","#devops","#genAi","#production"],
      thumbnail:"https://res.cloudinary.com/djy3ewpb8/image/upload/v1763095938/Screenshot_from_2025-11-14_10-20-55_pvvfnd.png"
    },
    {
      name: "Daksh",
      description:
        "Daksh is an all-in-one platform designed to enhance the academic experience by providing solution for managing study materials and facilitating seamless communication between students and teachers.",
      runningLink: "https://daksh.angadsudan.me",
      codeLink: "https://github.com/AngadSudan/Daksha",
      tags: ["#mern", "#genAI"],
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1745761645/Screenshot_2025-04-27_191353_fihjpq.png",
    },
    {
      name: "Dr. Web",
      description:
        "A Real Time Software Monitoring system created to observe your custom prometheus configuration with ease",
      runningLink: "https://drweb.angadsudan.me",
      codeLink: "",
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1751985439/Screenshot_2025-07-08_200132_rce3nc.png",
      tags: ["#mern", "#monitoring", "#prometheus"],
    },
    {
      name: "Hack With Her",
      description:
        "The all in one information platform regarding the HackWithHer hackathon organized by IEEE-CIET.",
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
    {
      name: "Quizora",
      description: "A Quiz Application with AI Based quiz generation.",
      runningLink: "https://quizora.angadsudan.me",
      codeLink: "",
      thumbnail:
        "https://res.cloudinary.com/djy3ewpb8/image/upload/v1747402834/Screenshot_2025-05-16_190619_tu9c5s.png",
      tags: ["#mern", "#AI"],
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
                delay: index * 0.5,
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

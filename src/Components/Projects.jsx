import React from "react";
import ProjectCard from "./ProjectCard";
import src from "../public/IdentityCard.jpg";
function Projects() {
  const data = [
    {
      name: "Project 1",
      description: "Description 1",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
    {
      name: "Project 2",
      description: "Description 2",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
    {
      name: "Project 3",
      description: "Description 3",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
    {
      name: "Project 4",
      description: "Description 4",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
    {
      name: "Project 5",
      description: "Description 5",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
    {
      name: "Project 6",
      description: "Description 6",
      runningLink: "https://www.google.com",
      codeLink: "https://www.google.com",
      thumbnail: "#",
    },
  ];
  return (
    <div className="w-full min-h-screen p-4">
      <h1 className="text-6xl mb-2 text-green-200 font-bold text-center">
        Projects
      </h1>
      <h3 className="text-2xl mb-16 font-semibold text-center">
        Discover some of my <span className="text-green-200">Projects</span>
      </h3>
      <div className="w-fit md:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              runningLink={project.runningLink}
              codeLink={project.codeLink}
              // thumbnail={src}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

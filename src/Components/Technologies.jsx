import React from "react";
import TechnologyCard from "./TechnologyCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiC,
  // SiJava,
  SiSocketdotio,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

function Technologies() {
  const technology = [
    {
      name: "HTML",
      image: <SiHtml5 className="w-12 h-12 text-[#E34F26]" />,
    },
    {
      name: "CSS",
      image: <SiCss3 className="w-12 h-12 text-[#1572B6]" />,
    },
    {
      name: "JavaScript",
      image: <SiJavascript className="w-12 h-12 text-[#F7DF1E]" />,
    },
    {
      name: "React",
      image: <SiReact className="w-12 h-12 text-[#61DAFB]" />,
    },
    {
      name: "Redux",
      image: <SiRedux className="w-12 h-12 text-[#764ABC]" />,
    },
    {
      name: "React Router",
      image: <SiReactrouter className="w-12 h-12 text-[#CA4245]" />,
    },
    {
      name: "Express",
      image: <SiExpress className="w-12 h-12 text-white" />,
    },
    {
      name: "Node.js",
      image: <SiNodedotjs className="w-12 h-12 text-[#339933]" />,
    },
    {
      name: "MongoDB",
      image: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
    },
    {
      name: "Python",
      image: <SiPython className="w-12 h-12 text-[#3776AB]" />,
    },
    {
      name: "C",
      image: <SiC className="w-12 h-12 text-[#A8B9CC]" />,
    },
    // {
    //   name: "Java",
    //   image: <SiJava className="w-12 h-12 text-[#007396]" />,
    // },
    {
      name: "Socket.io",
      image: <SiSocketdotio className="w-12 h-12 text-white" />,
    },
    {
      name: "Git",
      image: <SiGit className="w-12 h-12 text-[#F05032]" />,
    },
    {
      name: "TypeScript",
      image: <SiTypescript className="w-12 h-12 text-[#3178C6]" />,
    },
    {
      name: "PostgreSQL",
      image: <SiPostgresql className="w-12 h-12 text-[#4169E1]" />,
    },
    {
      name: "MySQL",
      image: <SiMysql className="w-12 h-12 text-[#4479A1]" />,
    },
    {
      name: "Prisma",
      image: <SiPrisma className="w-12 h-12 text-white" />,
    },
    {
      name: "Next.js",
      image: <SiNextdotjs className="w-12 h-12 text-white" />,
    },
  ];
  return (
    <div className="h-fit p-5 lg:p-0 lg:min-h-screen mb-36">
      {/* Responsive container for technology cards */}
      <h1 className="lg:hidden text-center text-3xl mb-24">
        Here's a Recap of What All I Have Used
      </h1>
      <div className="grid place-items-center w-4/5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mx-auto lg:hidden ">
        {technology.map((tech, index) => (
          <TechnologyCard
            index={index}
            image={tech.image}
            disabled="true"
            name={tech.name}
          />
        ))}
      </div>

      <h1 className="hidden lg:block text-center text-3xl mb-24">
        Here's a Recap of What All I Have Used
      </h1>

      <div className=" hidden lg:flex justify-evenly">
        {/* Front-end and Back-end container */}
        <div className="lg:flex flex-col h-full w-full lg:w-1/3 gap-16 md:grid md:grid-cols-1 md:gap-8">
          {/* Front-end Section */}
          <div className="border-2 border-green-300 rounded-md p-5">
            <h1 className="text-center text-5xl">Front-end</h1>
            <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 gap-4 w-full mx-auto my-3">
              {technology.map((tech, index) => {
                if (
                  [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Redux",
                    "React Router",
                    "Next.js",
                    "TypeScript",
                  ].includes(tech.name)
                ) {
                  return (
                    <TechnologyCard
                      index={index}
                      image={tech.image}
                      name={tech.name}
                    />
                  );
                }
              })}
            </div>
          </div>

          {/* Back-end Section */}
          <div className="border-2 border-green-300 rounded-md p-5">
            <h1 className="text-center text-5xl">Back-end</h1>
            <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 gap-4 w-full mx-auto my-3">
              {technology.map((tech, index) => {
                if (["Express", "Node.js", "Socket.io"].includes(tech.name)) {
                  return (
                    <TechnologyCard
                      index={index}
                      image={tech.image}
                      name={tech.name}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <h1 className="hidden lg:flex text-center mt-64 items-center text-5xl rounded-full h-48 w-48 border-2 border-white">
          Tech Stack
        </h1>

        {/* Programming and Database container */}
        <div className="lg:flex flex-col h-full w-full lg:w-1/3 gap-16 md:grid md:grid-cols-1 md:gap-8">
          {/* Database Section */}
          <div className="border-2 border-green-300 rounded-md p-5">
            <h1 className="text-center text-5xl">Database</h1>
            <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 gap-4 w-full mx-auto my-3">
              {technology.map((tech, index) => {
                if (
                  ["MongoDB", "PostgreSQL", "MySQL", "Prisma"].includes(
                    tech.name
                  )
                ) {
                  return (
                    <TechnologyCard
                      index={index}
                      image={tech.image}
                      name={tech.name}
                    />
                  );
                }
              })}
            </div>
          </div>

          {/* Programming Section */}
          <div className="border-2 border-green-300 rounded-md p-5">
            <h1 className="text-center text-5xl">Programming</h1>
            <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 gap-4 w-full mx-auto my-3">
              {technology.map((tech, index) => {
                if (
                  ["Python", "C", "Java", "JavaScript", "TypeScript"].includes(
                    tech.name
                  )
                ) {
                  return (
                    <TechnologyCard
                      index={index}
                      image={tech.image}
                      name={tech.name}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
// will come from left to right as overflow then will be visible all together

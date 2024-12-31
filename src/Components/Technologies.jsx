import React from "react";
import TechnologyCard from "./TechnologyCard";
function Technologies() {
  const technology = [
    {
      name: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Redux",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      svgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    },
    {
      name: "React Router",
      image:
        "https://imgs.search.brave.com/ZqsBpq-K7ayC7UD9xTGYmYU43YZBEF-akrF5oQqYY18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bHRp/bWF0ZWNvdXJzZXMu/Y29tL2Fzc2V0cy9j/YXRlZ29yeS9yZWFj/dC1yb3V0ZXItOWMw/YmIzNDlhN2NhOGQ2/OTllNGRjZDFlYmNk/ZDIxZGRhNzE5ODQ0/N2RmY2VmOTI4Zjlj/YmIwNzQ4ZTFmMGFk/NS5zdmc",
      svgUrl:
        "https://imgs.search.brave.com/ZqsBpq-K7ayC7UD9xTGYmYU43YZBEF-akrF5oQqYY18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bHRp/bWF0ZWNvdXJzZXMu/Y29tL2Fzc2V0cy9j/YXRlZ29yeS9yZWFj/dC1yb3V0ZXItOWMw/YmIzNDlhN2NhOGQ2/OTllNGRjZDFlYmNk/ZDIxZGRhNzE5ODQ0/N2RmY2VmOTI4Zjlj/YmIwNzQ4ZTFmMGFk/NS5zdmc",
    },
    {
      name: "Express",
      image:
        "https://imgs.search.brave.com/FfIehN7XKxDIYyYoUlbJyNRktsMDWbuhlvQeMGy65aI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n",
      svgUrl:
        "https://imgs.search.brave.com/FfIehN7XKxDIYyYoUlbJyNRktsMDWbuhlvQeMGy65aI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n",
    },
    {
      name: "Node.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://imgs.search.brave.com/iIEgRsBD5ZZoPqyXcoYJHh1XDx8Ls9gEQpek8M7LBpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctbW9u/Z29kYi1sb2dvLXBu/Zy00MDAucG5n",
      svgUrl:
        "https://imgs.search.brave.com/iIEgRsBD5ZZoPqyXcoYJHh1XDx8Ls9gEQpek8M7LBpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctbW9u/Z29kYi1sb2dvLXBu/Zy00MDAucG5n",
    },
    {
      name: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "C",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      svgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "Java",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "Socket.io",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    },
    {
      name: "Git",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "MySQL",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      svgUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    },
    {
      name: "Prisma",
      image:
        "https://imgs.search.brave.com/IQpQ5hToOH-nuCUvl181rHv1qx-b-oWT-xlvtVbwCoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3ByaXNt/YTIyNDQuanBn",
      svgUrl:
        "https://imgs.search.brave.com/IQpQ5hToOH-nuCUvl181rHv1qx-b-oWT-xlvtVbwCoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3ByaXNt/YTIyNDQuanBn",
    },
    {
      name: "Next.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      svgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
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

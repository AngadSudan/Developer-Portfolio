import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Timeline } from "./ui/timeline";

function Experience() {
  // const data = [
  //   {
  //     logo: "https://ieee.chitkara.edu.in/img/ieee.png",
  //     Position: "Web Team Member",
  //     Organisation: "IEEE",
  //     Timeline: "September 2024 - Present",
  //     Pointers: [
  //       "Worked on backend and frontend of HackWithHer 4.0",
  //       "Worked on the backend and frontend of the IEEE website",
  //     ],
  //   },
  //   {
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  //     Position: "Frontend Developer",
  //     Organisation: "React Community",
  //     Timeline: "June 2023 - August 2024",
  //     Pointers: [
  //       "Developed reusable components for the community project",
  //       "Contributed to the React documentation and tutorials",
  //     ],
  //   },
  // ];
  const data = [
    {
      title: "2024",
      content: (
        <ExperienceCard
          logo="https://ieee.chitkara.edu.in/img/ieee.png"
          Position="Web Team Member"
          Organisation="IEEE"
          Timeline="September 2024 - Present"
          Pointers={[
            "Worked on backend and frontend of HackWithHer 4.0",
            "Worked on the backend and frontend of the IEEE website",
          ]}
        />
      ),
    },
    {
      title: "2023",
      content: (
        <ExperienceCard
          logo="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          Position="Frontend Developer"
          Organisation="React Community"
          Timeline="June 2023 - August 2024"
          Pointers={[
            "Developed reusable components for the community project",
            "Contributed to the React documentation and tutorials",
          ]}
        />
      ),
    },
  ];
  return (
    <div className="my-24 mb-36">
      <h1 className="text-center text-5xl my-12">Experience</h1>
      {/* <div className="w-full overflow-x-hidden mx-auto justify-center flex flex-col md:flex-row">
        {data.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              logo={experience.logo}
              Position={experience.Position}
              Organisation={experience.Organisation}
              Timeline={experience.Timeline}
              Pointers={experience.Pointers}
            />
          );
        })}
      </div> */}
      <h1 className="text-center text-3xl opacity-70 my-12">
        All my previous Works
      </h1>
      <div className="w-full overflow-x-hidden mx-auto justify-center flex flex-col md:flex-row">
        <Timeline data={data} />
      </div>
    </div>
  );
}

// will be visible from right to left based on timeline and pinned

export default Experience;

import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Timeline } from "./ui/timeline";

function Experience({ className }) {
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
      title: "September 2024",
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
      title: "September 2024",
      content: (
        <ExperienceCard
          logo="https://avatars.githubusercontent.com/u/110965119?s=200&v=4"
          Position="Web Team member"
          Organisation="Open Source Chandigarh"
          Timeline="September 2024 - Present"
          Pointers={["developed web interface for the communities website"]}
        />
      ),
    },
    {
      title: "June 2024",
      content: (
        <ExperienceCard
          logo="https://imgs.search.brave.com/HuEsrvf-wlyh44RjQV_TKGj0Cxon4dCl_93DG_Z-URk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtdjIuc2NhbGVy/LmNvbS9hc3NldHMv/c3VjY2Vzc19zdG9y/aWVzL3N2Zy9sb2dv/LTMxODZkMDdjNmUw/OWE1YWRmNDAxMDI1/MTg4MTJlNTc0NmQ4/NDc2ODI5ZjI3NjQ5/M2ViZjljYTQwMzUw/YzY3ODcuc3ZnLmd6"
          Position="Student Intern"
          Organisation="Scaler School of Technolog"
          Timeline="June 2024 - September 2024"
          Pointers={[
            "Learned and applied Social Media Marketing strategies, optimizing a newly created LinkedIn account",
            "Designed a no-code website using WixStudio, integrating a chat-bot via Tawk.to, resulting in visitor engagement ",
          ]}
        />
      ),
    },
  ];
  return (
    <div className={`my-24 mb-36 ${className}`}>
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

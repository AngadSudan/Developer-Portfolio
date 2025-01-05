import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";
function Experience({ className }) {
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
    <div className={`my-24 mb-36 w-full ${className}`}>
      <h1 className="text-center text-5xl my-12">Experience</h1>
      <h1 className="text-center text-3xl opacity-70 my-12">
        All my previous Works
      </h1>
      <div className="hidden w-full mx-auto sm:flex flex-col md:flex-row relative">
        <Timeline data={data} />
      </div>
      <motion.div
        className="flex flex-col sm:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        {data.map((item, index) => (
          <ExperienceCard
            key={index}
            logo={item.content.props.logo}
            Position={item.content.props.Position}
            Organisation={item.content.props.Organisation}
            Timeline={item.content.props.Timeline}
            Pointers={item.content.props.Pointers}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Experience;

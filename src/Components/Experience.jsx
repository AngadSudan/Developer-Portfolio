import React from "react";
import ExperienceCard from "./ExperienceCard";
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
          isEven={false}
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
          isEven={true}
        />
      ),
    },
    {
      title: "June 2024",
      content: (
        <ExperienceCard
          logo="https://imgs.search.brave.com/HuEsrvf-wlyh44RjQV_TKGj0Cxon4dCl_93DG_Z-URk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtdjIuc2NhbGVy/LmNvbS9hc3NldHMv/c3VjY2Vzc19zdG9y/aWVzL3N2Zy9sb2dv/LTMxODZkMDdjNmUw/OWE1YWRmNDAxMDI1/MTg4MTJlNTc0NmQ4/NDc2ODI5ZjI3NjQ5/M2ViZjljYTQwMzUw/YzY3ODcuc3ZnLmd6"
          Position="Student Intern"
          Organisation="Scaler School of Technology"
          Timeline="June 2024 - September 2024"
          Pointers={[
            "Learned and applied Social Media Marketing strategies, optimizing a newly created LinkedIn account",
            "Designed a no-code website using WixStudio, integrating a chat-bot via Tawk.to, resulting in visitor engagement ",
          ]}
          isEven={false}
        />
      ),
    },
  ];

  return (
    <section className={`py-24 mt-12 relative overflow-hidden ${className}`}>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #4ade80);
          border-radius: 10px;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute left-0 right-0 top-0 bottom-0 opacity-10 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#06b6d4] blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-64 h-64 rounded-full bg-green-300 blur-3xl bottom-40 -right-20"></div>
        <div className="absolute w-48 h-48 rounded-full bg-[#3b82f6] blur-3xl top-40 right-40"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#06b6d4] via-green-300 to-[#6366f1] inline-block text-transparent bg-clip-text mb-4">
            Experience
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#06b6d4] via-green-300 to-[#6366f1] mx-auto mb-6"></div>
          <h2 className="text-2xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and contributions
          </h2>
        </motion.div>

        {/* Timeline for desktop */}
        <div className="hidden sm:block w-full mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#06b6d4] via-green-300 to-[#6366f1] opacity-50"></div>

          {data.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } relative mb-16`}
            >
              {/* Time marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#051845] border-2 border-green-300 z-10"></div>
                <p className="text-sm font-medium text-gray-400 mt-2 whitespace-nowrap">
                  {item.title}
                </p>
              </div>

              {/* Card - standardized width */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                }`}
              >
                {React.cloneElement(item.content, { isEven: index % 2 === 0 })}
              </div>
            </div>
          ))}
        </div>

        {/* Cards for mobile */}
        <motion.div
          className="sm:hidden space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          {data.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 rounded-full bg-[#051845] border-2 border-green-300"></div>
                <p className="text-sm font-medium text-gray-400 ml-3">
                  {item.title}
                </p>
              </div>
              {React.cloneElement(item.content, { isEven: false })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

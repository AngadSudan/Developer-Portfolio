import React, { useState } from "react";
import { Aperture } from "lucide-react";
import { Braces } from "lucide-react";

function ProjectCard({
  name,
  description,
  runningLink,
  codeLink,
  thumbnail = "https://images.unsplash.com/photo-1496524455066-3036dce22302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-4 rounded-md bg-black min-w-full mx-4 w-fit relative"
    >
      <div className="flex w-full justify-between">
        <h1>{name}</h1>
        <div className="flex gap-4 mb-4">
          <a
            href={runningLink}
            className="text-green-200"
            target="_blank"
            rel="noreferrer"
          >
            <Aperture size={24} />
          </a>
          <a
            href={codeLink}
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            <Braces size={24} />
          </a>
        </div>
      </div>
      <div>
        <div>
          <img src={thumbnail} alt={name} className="w-full object-cover" />
        </div>
        <div
          className={`h-full w-full absolute top-0 left-0 opacity-60 blur-xl z-10 ${
            isHovered ? "bg-black" : ""
          }`}
        />
      </div>
      <p
        className={`z-20 absolute bottom-10 font-semibold text-2xl text-wrap ${
          isHovered ? "text-white" : "text-transparent"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default ProjectCard;

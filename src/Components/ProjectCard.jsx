import React, { useState } from "react";
import { Aperture, Braces } from "lucide-react";

function ProjectCard({
  name,
  description,
  runningLink,
  codeLink,
  tags,
  thumbnail = "/api/placeholder/400/300",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full p-4 rounded-lg bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-800/20"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white truncate pr-2">
          {name}
        </h2>
        <div className="flex gap-3">
          {runningLink && (
            <a
              href={runningLink}
              className="text-green-400 hover:text-green-300 transition-colors"
              target="_blank"
              rel="noreferrer"
              aria-label="View Live Project"
            >
              <Aperture size={20} />
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              className="text-white hover:text-zinc-300 transition-colors"
              target="_blank"
              rel="noreferrer"
              aria-label="View Code"
            >
              <Braces size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Description */}
      <div className="h-20 overflow-hidden">
        <p className="text-zinc-300 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-green-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

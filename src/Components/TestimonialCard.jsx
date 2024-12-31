import React from "react";
import { Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function TestimonialCard({
  profilePic = "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=8lmFJ68jo0AB02jBDHswcJjuh_YhQMKEC7nTrtgQ58I=",
  name,
  title,
  testimonial,
  linkedinUrl,
  githubUrl,
}) {
  return (
    <div className="relative p-6 border-2 border-white/20 rounded-xl backdrop-blur-sm bg-slate-900/60 shadow-xl hover:border-white/40 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative flex justify-between items-start mx-auto w-[90%]">
        {/* Profile section */}
        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(${profilePic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-full h-20 w-20 border-2 border-white/20 shadow-lg"
            aria-label={`Profile picture of ${name}`}
          />
        </div>

        {/* Name and title section */}
        <div className="text-right">
          <h2 className="font-bold text-xl text-white mb-1">{name}</h2>
          <p className="text-blue-400 text-sm mb-2">{title}</p>

          {/* Social links */}
          <div className="flex gap-2 justify-end">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <FaGithub className="text-white text-xl" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-purple-400 transition-colors"
                aria-label={`${name}'s GitHub profile`}
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial text */}
      <div className="relative mt-6">
        <p className="text-white/80 text-center leading-relaxed tracking-wide">
          {testimonial}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

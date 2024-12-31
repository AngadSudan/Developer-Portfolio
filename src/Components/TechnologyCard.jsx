import React from "react";

function TechnologyCard({ index, image, name, disabled = false }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      key={index}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex flex-col items-center justify-center p-4 m-3 
                 rounded-full aspect-square w-20 h-20
                 transition-all duration-300 ease-in-out
                 hover:transform hover:scale-110
                 bg-gradient-to-br from-slate-900/50 to-slate-800/30
                 border border-white/10 hover:border-white/30
                 backdrop-blur-sm"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-purple-500/0 
                    group-hover:from-blue-500/10 group-hover:to-purple-500/10 
                    transition-all duration-300 pointer-events-none"
      />

      {/* Image container */}
      <div
        className="relative w-16 h-16 flex items-center justify-center
                    transform transition-transform duration-300 ease-in-out
                    group-hover:-translate-y-1"
      >
        {image}

        {/* Subtle reflection */}
        <div
          className="absolute -bottom-2 w-12 h-1.5 bg-gradient-to-t from-white/10 to-transparent 
                      rounded-full blur-sm opacity-0 group-hover:opacity-100
                      transition-opacity duration-300"
        />
      </div>

      {/* Technology name tooltip */}
      {!disabled && (
        <div
          className={`
          absolute -top-14 left-1/2 transform -translate-x-1/2
          px-4 py-2 rounded-full
          bg-slate-900/90 backdrop-blur-sm
          border border-white/20
          transition-all duration-300
          ${
            hover
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }
        `}
        >
          <h2 className="text-lg whitespace-nowrap text-white">{name}</h2>

          {/* Tooltip arrow */}
          <div
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                        w-2 h-2 rotate-45
                        bg-slate-900/90 border-r border-b border-white/20"
          />
        </div>
      )}
    </div>
  );
}

export default TechnologyCard;

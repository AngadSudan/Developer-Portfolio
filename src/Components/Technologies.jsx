import React, { useState } from "react";
import { motion } from "framer-motion";
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
  SiSocketdotio,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

// Improved Technology Card Component
const TechnologyCard = ({ name, icon, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Category-based color schemes
  const colorSchemes = {
    Frontend: {
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-cyan-400",
      hover: "group-hover:border-cyan-300",
    },
    Backend: {
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-400",
      hover: "group-hover:border-green-300",
    },
    Database: {
      bg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
      border: "border-purple-400",
      hover: "group-hover:border-purple-300",
    },
    Programming: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-400",
      hover: "group-hover:border-yellow-300",
    },
  };

  const colors = colorSchemes[category];

  return (
    <motion.div
      className={`group relative flex flex-col items-center justify-center p-4 rounded-xl ${colors.bg} backdrop-blur-sm border ${colors.border} transition-all duration-300 hover:shadow-lg hover:shadow-${colors.border}/20`}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="text-4xl mb-2"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>

      <h3 className="text-sm font-medium text-center">{name}</h3>

      <motion.div
        className={`absolute inset-0 rounded-xl border-2 border-transparent ${colors.hover} opacity-0 group-hover:opacity-100`}
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

function Technologies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const technologies = [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-[#E34F26]" />,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-[#1572B6]" />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      category: "Frontend",
    },
    {
      name: "React",
      icon: <SiReact className="text-[#61DAFB]" />,
      category: "Frontend",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-[#764ABC]" />,
      category: "Frontend",
    },
    {
      name: "React Router",
      icon: <SiReactrouter className="text-[#CA4245]" />,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      category: "Frontend",
    },

    {
      name: "Express",
      icon: <SiExpress className="text-white" />,
      category: "Backend",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-[#339933]" />,
      category: "Backend",
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio className="text-white" />,
      category: "Backend",
    },

    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      category: "Database",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#4169E1]" />,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-[#4479A1]" />,
      category: "Database",
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-white" />,
      category: "Database",
    },

    {
      name: "Python",
      icon: <SiPython className="text-[#3776AB]" />,
      category: "Programming",
    },
    {
      name: "C",
      icon: <SiC className="text-[#A8B9CC]" />,
      category: "Programming",
    },
    {
      name: "Git",
      icon: <SiGit className="text-[#F05032]" />,
      category: "Programming",
    },
  ];

  const categories = ["all", "Frontend", "Backend", "Database", "Programming"];

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-100 to-green-500 inline-block text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Tech Stack & Skills
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of technologies I've worked with throughout my journey
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-green-400 to-green-500 text-white font-medium shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70"
              }`}
            >
              {category === "all" ? "All Technologies" : category}
            </button>
          ))}
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <TechnologyCard
                name={tech.name}
                icon={tech.icon}
                category={tech.category}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Level Indicators */}
        <motion.div
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["Frontend", "Backend", "Database", "Programming"].map(
            (category, idx) => {
              const count = technologies.filter(
                (t) => t.category === category
              ).length;
              const percentage = Math.round(
                (count / technologies.length) * 100
              );

              const colorClasses = {
                Frontend: "from-blue-500 to-cyan-400",
                Backend: "from-green-500 to-emerald-400",
                Database: "from-purple-500 to-indigo-400",
                Programming: "from-yellow-500 to-amber-400",
              };

              return (
                <motion.div
                  key={category}
                  className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${colorClasses[category]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{count} technologies</span>
                    <span>{percentage}% of stack</span>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;

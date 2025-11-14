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
  SiNginx,
  SiPrometheus,
  SiDocker,
  SiDjango,
} from "react-icons/si";
import { SiApachekafka } from "react-icons/si";

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
    Devops: {
      bg: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
      border: "border-red-400",
      hover: "group-hover:border-red-300",
    },
  };

  const colors = colorSchemes[category];
  console.log(category);
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
      name: "Nginx",
      icon: <SiNginx className="text-white" />,
      category: "Devops",
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
    {
      name: "Prometheus",
      icon: <SiPrometheus className="text-[#F05032]" />,
      category: "Devops",
    },
    {
      name: "Django",
      icon: <SiDjango className="text-white" />,
      category: "Backend",
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-[#F05032]" />,
      category: "Devops",
    },
    {
      name: "Django-rest",
      icon: (
        <img
          src="data:image/png;base64,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"
          className="text-white h-10 w-28"
        />
      ),
      category: "Backend",
    },{
      name:"Kafka",
      icon: <SiApachekafka />,
      category: "Devops"
    }
  ];

  const categories = [
    "all",
    "Frontend",
    "Backend",
    "Database",
    "Programming",
    "Devops",
  ];

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
          {["Frontend", "Backend", "Database", "Programming", "Devops"].map(
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
                Devops: "from-red-300 to-orange-300",
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

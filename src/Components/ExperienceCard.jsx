import { motion } from "framer-motion";
import React from "react";
function ExperienceCard({
  logo = "https://imgs.search.brave.com/aML63go3qx4B2AZEeBGsMDESVu76lSffF1mIpwch2vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzA3Lzg0/LzM2MF9GXzM4ODA3/ODQ1NF9tS3RiZFhZ/RjljeVFvdkNDVHNq/cUkwZ2JmdTdnQ2NT/cC5qcGc",
  Position,
  Organisation,
  Pointers,
  Timeline,
  isEven,
}) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-[#051845] to-[#062056] mx-2 h-[280px] p-6 rounded-lg my-4 border-l-4 border-[#3b82f6] shadow-lg relative overflow-hidden`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Background accent */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-green-300 opacity-10"></div>
      <div className="absolute top-10 -left-16 w-32 h-32 rounded-full bg-[#06b6d4] opacity-10"></div>

      <div className="mb-4 p-2 flex flex-col sm:flex-row justify-between w-full">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-green-300 rounded-full blur-md opacity-70"></div>
            <div className="relative p-1 bg-[#051845] rounded-full">
              <img
                src={logo}
                alt={Organisation}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="ml-4 sm:hidden">
            <h1 className="text-xl font-bold text-white">{Position}</h1>
            <h2 className="text-lg text-gray-300">{Organisation}</h2>
          </div>
        </div>

        <div className="hidden sm:block">
          <h1 className="text-xl text-right my-auto font-bold text-white">
            {Position}
          </h1>
          <h2 className="text-lg text-right my-auto text-gray-300">
            {Organisation}
          </h2>
          <div className="flex items-center justify-end mt-1">
            <div className="h-2 w-2 rounded-full bg-green-300 mr-2"></div>
            <p className="text-sm font-medium text-gray-400">{Timeline}</p>
          </div>
        </div>

        <p className="text-sm font-medium text-gray-400 sm:hidden">
          {Timeline}
        </p>
      </div>

      <div className="mt-6 overflow-y-auto max-h-[120px] pr-2 custom-scrollbar">
        <ul className="space-y-2">
          {Pointers.map((pointer, index) => {
            return (
              <li
                key={index}
                className="flex items-start text-lg text-gray-200"
              >
                <span className="mr-2 mt-1 text-green-300">•</span>
                <span>{pointer}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#06b6d4] via-green-300 to-[#6366f1]"></div>
    </motion.div>
  );
}

export default ExperienceCard;

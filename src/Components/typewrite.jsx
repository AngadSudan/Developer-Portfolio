import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ strings = [], delay = 100, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    if (strings.length === 0) return;

    const typewriterEffect = () => {
      const currentString = strings[stringIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentString.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);

        // When deletion is complete
        if (currentIndex <= 1) {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        // Typing text
        setCurrentText(currentString.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);

        // When typing is complete
        if (currentIndex >= currentString.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    const timer = setTimeout(typewriterEffect, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, stringIndex, strings, delay, pauseTime]);

  return (
    <div className="inline-block">
      <span className="text-3xl bg-clip-text bg-gradient-to-r from-green-200 to-green-500 font-bold">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <h1 className="text-4xl font-bold mb-4">
      I am a{" "}
      <TypewriterEffect
        strings={[
          "Frontend Developer",
          "Backend Developer",
          "MERN Stack Developer",
          "Full Stack Developer",
        ]}
        delay={100}
        pauseTime={200}
      />
    </h1>
  );
};

export default HeroSection;

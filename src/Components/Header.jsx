import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation data
  const navbarData = [
    { location: "Home", link: "/" },
    { location: "About", link: "/about" },
    { location: "Projects", link: "/projects" },
    { location: "Contact", link: "/contact" },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (showMenu) {
      const closeMenu = (e) => {
        if (
          !e.target.closest(".mobile-menu") &&
          !e.target.closest(".menu-button")
        ) {
          setShowMenu(false);
        }
      };

      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [showMenu]);

  return (
    <header
      className={` w-full  transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-gray-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex w-[85%] mx-auto items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="group">
            <h1 className="font-bold text-2xl md:text-3xl text-green-200 flex items-center">
              <span className="text-green-400">&lt;</span>
              <span className="group-hover:text-green-300 transition-colors duration-300">
                Angad
              </span>
              <span className="text-green-400">/&gt;</span>
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navbarData.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `px-4 py-2 mx-1 text-lg font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-green-600/20 text-green-200"
                      : "text-green-200 hover:bg-green-600/20 hover:text-green-100"
                  }`
                }
              >
                {item.location}
              </NavLink>
            ))}

            <NavLink
              to="/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-gray-900 font-medium px-5 py-2 rounded-md transition-all duration-200 transform hover:scale-105"
            >
              <span>Buy Me a Coffee</span>
              <Coffee size={18} />
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden menu-button flex items-center text-green-200 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-md p-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu lg:hidden fixed top-0 right-0 w-4/5 max-w-sm h-full bg-gray-800 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              aria-label="Close menu"
              className="text-green-200 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 rounded-full p-2"
              onClick={() => setShowMenu(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-4 mt-10">
            {navbarData.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `px-4 py-3 text-xl font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-green-600/20 text-green-200"
                      : "text-green-200 hover:bg-green-600/20 hover:text-green-100"
                  }`
                }
                onClick={() => setShowMenu(false)}
              >
                {item.location}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Coffee Button */}
          <NavLink
            to="/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto mb-10 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-gray-900 font-medium px-5 py-3 rounded-md transition-colors duration-200"
          >
            <span>Buy Me a Coffee</span>
            <Coffee size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

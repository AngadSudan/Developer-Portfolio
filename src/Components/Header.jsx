import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const navbarData = [
    {
      location: "Home",
      link: "/",
    },
    {
      location: "About",
      link: "/about",
    },
    {
      location: "Projects",
      link: "/",
    },
    {
      location: "Contact",
      link: "/",
    },
  ];
  return (
    <section className=" min-h-fit p-4 mt-6 bg-gray-800 text-green-200">
      {/* Bigger Screen View */}
      <div className="md:flex hidden  md:w-[90%] lg:w-3/5 mx-auto justify-between">
        <h1 className="font-semibold my-auto text-4xl"> &lt; Angad /&gt; </h1>
        <ul className="flex w-3/5 justify-between">
          {navbarData.map((item, index) => {
            return (
              <NavLink
                to={item.link}
                key={index}
                className="font-yatraOne hover:p-3 transition-all hover:rounded-full hover:bg-green-300 hover:text-white text-2xl mx-2 my-auto "
              >
                {item.location}
              </NavLink>
            );
          })}
        </ul>
      </div>
      {/* Smaller Screen View */}
      <div className="flex md:hidden">
        <div className="flex justify-between w-4/5 mx-auto">
          <h1 className="font-semibold text-4xl my-auto">Angad</h1>
          <button
            onClick={() => {
              setShowMenu(true);
            }}
            className="h-fit w-fit"
          >
            <img
              src="https://img.icons8.com/?size=100&id=108634&format=png&color=000000"
              alt="menu"
            />
          </button>
        </div>
      </div>
      {/* MenuBar*/}
      <div
        className={`h-screen w-3/5 ${
          showMenu ? "translate-x-0" : "translate-x-[100%]"
        } transition-all fixed z-[9999] right-0 top-0 bg-gray-800 text-green-200`}
      >
        <div>
          <button
            onClick={() => {
              console.log("clicked");
              setShowMenu(false);
            }}
            className="h-fit w-4/5 mx-auto p-4 text-7xl text-green-200 text-right"
          >
            X
          </button>
        </div>
        <ul className=" flex flex-col h-full">
          {navbarData.map((item, index) => {
            return (
              <NavLink
                to={item.link}
                key={index}
                className="pl-12 font-yatraOne hover:p-3 transition-all hover:rounded-full hover:bg-green-300 hover:text-white text-2xl mx-2 my-8"
              >
                {item.location}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Header;

import React from "react";
import {
  Hero,
  Experience,
  Projects,
  Technologies,
  Testimonials,
} from "../Components/index.js";
function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Technologies />
      <Projects />
      <Experience
      // className="hidden md:block"
      />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}

export default Home;

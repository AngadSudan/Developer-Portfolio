import React from "react";
import {
  Header,
  Hero,
  Footer,
  Experience,
  Projects,
  Technologies,
  Testimonials,
} from "../components/index.js";
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
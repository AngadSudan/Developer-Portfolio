import React from "react";
import {
  Header,
  Hero,
  Footer,
  Experience,
  Projects,
  Technologies,
  Testimonials,
} from "./Components/index";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Experience className="hidden md:block" />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;

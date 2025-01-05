import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

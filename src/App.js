import React, { Fragment, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <Fragment>
      <Navbar nav={nav} toggleNav={toggleNav} />
      <main>
        <Home />
        <About />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;

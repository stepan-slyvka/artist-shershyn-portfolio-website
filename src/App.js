import React, { Fragment } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Home />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;

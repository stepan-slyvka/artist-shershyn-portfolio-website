import React from "react";

import { Link } from "react-scroll";

import classes from "./Home.module.css";

import heroImg from "../assets/cropped_images/heroImage.jpg";

import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="Home" className={classes.wrapper}>
      <img src={heroImg} alt="heroImage" />
      <div className={classes.container}>
        <div className={classes.info}>
          <h1>Ivan Shershyn</h1>
          <p>Young, talanted artist from Ukraine, Transcarpathia</p>
        </div>
        <div className={classes.btn}>
          <Link to="Works" smooth={true} duration={500}>
            <button>
              See my work <HiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

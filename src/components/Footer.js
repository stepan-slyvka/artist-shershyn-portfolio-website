import React from "react";

import { Link } from "react-scroll";

import classes from "./Footer.module.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes["text-wrapper"]}>
        <Link to="Home" smooth={true} duration={500}>
          <h3>Ivan Shershyn</h3>
        </Link>
        <div className={classes.social}>
          <a
            href="https://www.facebook.com/people/Shershun-Ivan/100005922678012/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/shershun_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <p>All rights reserved. 2022</p>
    </footer>
  );
};

export default Footer;

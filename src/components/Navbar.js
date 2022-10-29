import React from "react";

import { Link } from "react-scroll";

import Hamburger from "hamburger-react";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Testimonials",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    // Menu for width >= 1024px
    <>
      <nav className={classes.nav}>
        <div className={classes.container}>
          <Link to="Home" smooth={true} duration={500}>
            <h1>Ivan Shershyn</h1>
          </Link>
          <ul>
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link to={link} smooth={true} duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={props.toggleNav} className={classes.hamburger}>
            <Hamburger direction="right" size={20} duration="0.5" />
          </div>
        </div>
      </nav>

      {/* Menu for mobile devices and tablets */}

      {props.nav && (
        <nav className={classes["small-devices-menu"]}>
          <ul>
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link to={link} smooth={true} duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;

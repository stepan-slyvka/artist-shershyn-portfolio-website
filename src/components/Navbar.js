import React from "react";

import { Link } from "react-scroll";

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
      link: "Works",
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
      </div>
    </nav>
  );
};

export default Navbar;

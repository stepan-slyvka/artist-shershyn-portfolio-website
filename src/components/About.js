import React from "react";

import classes from "./About.module.css";

import Ivan from "../assets/ivan_shershyn.jpg";

import { BiPaint } from "react-icons/bi";

const About = () => {
  return (
    <section className={classes.wrapper} name="About">
      <div className={classes.info}>
        <h1>
          About Me <BiPaint />
        </h1>
      </div>
      <div className={classes.container}>
        <img src={Ivan} alt="artist" />
        <div className={classes.text}>
          <p>
            Ad aute aliqua consequat reprehenderit eiusmod aute enim irure
            deserunt consequat do. Cupidatat proident ullamco ullamco aute
            veniam commodo dolor reprehenderit fugiat irure. Nostrud Lorem
            reprehenderit do ex quis anim. Aliquip excepteur magna in ad quis
            duis dolore irure velit do et commodo voluptate elit. Sunt occaecat
            Lorem sint nisi nisi ipsum laborum exercitation ipsum ex.
          </p>
          <p>
            Ad aute aliqua consequat reprehenderit eiusmod aute enim irure
            deserunt consequat do. Cupidatat proident ullamco ullamco aute
            veniam commodo dolor reprehenderit fugiat irure. Nostrud Lorem
            reprehenderit do ex quis anim. Aliquip excepteur magna in ad quis
            duis dolore irure velit do et commodo voluptate elit. Sunt occaecat
            Lorem sint nisi nisi ipsum laborum exercitation ipsum ex.
          </p>
          <p>
            Ad aute aliqua consequat reprehenderit eiusmod aute enim irure
            deserunt consequat do. Cupidatat proident ullamco ullamco aute
            veniam commodo dolor reprehenderit fugiat irure. Nostrud Lorem
            reprehenderit do ex quis anim. Aliquip excepteur magna in ad quis
            duis dolore irure velit do et commodo voluptate elit. Sunt occaecat
            Lorem sint nisi nisi ipsum laborum exercitation ipsum ex.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

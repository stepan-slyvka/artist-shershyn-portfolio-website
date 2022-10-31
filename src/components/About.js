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
            I, Shershun Ivan Vasyliovych, was born in the village Nove
            Davydkovo, Transcarpathia, near the Mukachevo city, I am Ukrainian.
            In 2009, I entered the Mukachevo art school. I started creating my
            first oil works in 2007.
          </p>
          <p>
            I studied from local artists since I was a teenager, organized local
            plein airs. I devoted all my free time to art, painting and tried
            painting on wood. More than 30 of my first works are exhibited in a
            private museum in Kyiv.
          </p>
          <p>
            My creative oil works can be found in private collections in Greece,
            Canada, USA, Russia, Germany. A large number of my works were sold
            at the Violiti auction. I am the author of more than 250 works with
            oil on canvas. At the moment, I paint paintings on order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

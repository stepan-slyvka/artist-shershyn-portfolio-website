import React from "react";

import classes from "./Works.module.css";

import { GoPaintcan } from "react-icons/go";

import art1 from "../assets/cropped_images/art1.jpg";
import art2 from "../assets/cropped_images/art2.jpg";
import art3 from "../assets/cropped_images/art3.jpg";
import art4 from "../assets/cropped_images/art4.jpg";
import art5 from "../assets/cropped_images/art5.jpg";
import art6 from "../assets/cropped_images/art6.jpg";
import art7 from "../assets/cropped_images/art7.jpg";
import art8 from "../assets/cropped_images/art8.jpg";
import art9 from "../assets/cropped_images/art9.jpg";
import art10 from "../assets/cropped_images/art10.jpg";

const Works = () => {
  const items = [
    {
      id: 1,
      src: art1,
      title: "Winter art",
    },
    {
      id: 2,
      src: art2,
      title: "Sunset",
    },
    {
      id: 3,
      src: art3,
      title: "Prince",
    },
    {
      id: 4,
      src: art4,
      title: "King",
    },
    {
      id: 5,
      src: art5,
      title: "Sea",
    },
    {
      id: 6,
      src: art6,
      title: "Horse",
    },
    {
      id: 7,
      src: art7,
      title: "Lion",
    },
    {
      id: 8,
      src: art8,
      title: "Flowers",
    },
    {
      id: 9,
      src: art9,
      title: "Winter landscape",
    },
    {
      id: 10,
      src: art10,
      title: "Child and a rabbit",
    },
  ];

  return (
    <section className={classes.wrapper} name="Works">
      <div className={classes["text-wrapper"]}>
        <h1>
          My Works <GoPaintcan />
        </h1>
        <p>Here are some of my work examples</p>
      </div>

      <div className={classes.container}>
        {items.map(({ id, src, title }) => (
          <div key={id} className={classes["image-wrapper"]}>
            <img src={src} alt={title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;

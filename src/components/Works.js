import React from "react";

import classes from "./Works.module.css";

import { GoPaintcan } from "react-icons/go";

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import art1 from "../assets/cropped_images/art1.JPG";
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
  return (
    <section className={classes.wrapper} name="Works">
      <div className={classes["text-wrapper"]}>
        <h1>
          My Works <GoPaintcan />
        </h1>
        <p>
          Here are some of my work examples (click on image to see full version)
        </p>
      </div>

      <div className={classes.container}>
        <Gallery>
          <Item original={art1} thumbnail={art1} width="700" height="968">
            {({ ref, open }) => (
              <img
                alt="Winter art"
                ref={ref}
                onClick={open}
                src={art1}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art2}
            thumbnail={art2}
            width="1024"
            height="768"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Sunset"
                ref={ref}
                onClick={open}
                src={art2}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art3}
            thumbnail={art3}
            width="700"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Prince"
                ref={ref}
                onClick={open}
                src={art3}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art4}
            thumbnail={art4}
            width="700"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="King"
                ref={ref}
                onClick={open}
                src={art4}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art5}
            thumbnail={art5}
            width="1024"
            height="768"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Sea"
                ref={ref}
                onClick={open}
                src={art5}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art6}
            thumbnail={art6}
            width="700"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Horse"
                ref={ref}
                onClick={open}
                src={art6}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art7}
            thumbnail={art7}
            width="700"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Lion"
                ref={ref}
                onClick={open}
                src={art7}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art8}
            thumbnail={art8}
            width="800"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Flowers"
                ref={ref}
                onClick={open}
                src={art8}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art9}
            thumbnail={art9}
            width="800"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Winter landscape"
                ref={ref}
                onClick={open}
                src={art9}
                className={classes.photos}
              />
            )}
          </Item>
          <Item
            original={art10}
            thumbnail={art10}
            width="700"
            height="968"
            className={classes.photos}
          >
            {({ ref, open }) => (
              <img
                alt="Child and a rabbit"
                ref={ref}
                onClick={open}
                src={art10}
                className={classes.photos}
              />
            )}
          </Item>
        </Gallery>
      </div>
    </section>
  );
};

export default Works;

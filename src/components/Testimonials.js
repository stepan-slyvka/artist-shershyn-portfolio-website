import React from "react";

import classes from "./Testimonials.module.css";

import { SlPeople } from "react-icons/sl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../assets/testimonials/testimonial-girl.jpg";
import testimonial2 from "../assets/testimonials/testimonial-girl-2.jpg";
import testimonial3 from "../assets/testimonials/testimonial-girl-3.jpg";
import testimonial4 from "../assets/testimonials/testimonial-man-1.jpg";
import testimonial5 from "../assets/testimonials/testimonial-man-2.jpg";
import testimonial6 from "../assets/testimonials/testimonial-man-3.jpg";

const Testimonials = () => {
  const settings = {
    accessibility: true,
    draggable: true,
    arrows: false,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    autoplay: true,
    fade: true,
    centerMode: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      src: testimonial1,
      alt: "testimonial",
      name: "Karolina",
      about: "Great painting! Recommended for cooperation!",
    },
    {
      id: 2,
      src: testimonial2,
      alt: "testimonial",
      name: "Svitlana",
      about:
        'The painting / icon "Archangel Michael" was a very pleasant surprise - it is much better than in the photo! Exceptionally best recommendations! Thanks to the seller-artist!',
    },
    {
      id: 3,
      src: testimonial3,
      alt: "testimonial",
      name: "Anna",
      about: "Great paintings! I recommend!",
    },
    {
      id: 4,
      src: testimonial4,
      alt: "testimonial",
      name: "Ivan",
      about:
        "Deal has been completed successfully! Great job! Great seller and talented artist! I recommend cooperation! +5",
    },
    {
      id: 5,
      src: testimonial5,
      alt: "testimonial",
      name: "Petro",
      about:
        "Everything is great. Thank you for the aesthetic pleasure of the picture. Good luck.",
    },
    {
      id: 6,
      src: testimonial6,
      alt: "testimonial",
      name: "Devid",
      about: "Great artist, great seller. I recommend.",
    },
  ];

  return (
    <section className={classes.wrapper} name="Testimonials">
      <div className={classes.container}>
        <div className={classes["text-wrapper"]}>
          <h1>
            Testimonials <SlPeople />
          </h1>
          <p>What my clients say about me</p>
        </div>
        <Slider {...settings} className={classes.carousel}>
          {testimonials.map(({ id, src, alt, name, about }) => (
            <div key={id}>
              <img src={src} alt={alt} />
              <h3>{name}</h3>
              <p>{about}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

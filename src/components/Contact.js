import React from "react";

import classes from "./Contact.module.css";

import { useFormik } from "formik";

import art from "../assets/cropped_images/art14.jpg";

import { MdOutlineTouchApp } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  //  Form validation here

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "This field cannot be empty!";
    } else if (values.name.length <= 3) {
      errors.name = "Name must be 4 symbols or more!";
    }

    if (!values.email) {
      errors.email = "This field cannot be empty!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email!";
    }

    if (!values.message) {
      errors.message = "This field cannot be empty!";
    } else if (values.message.length <= 9) {
      errors.message = "Text must be 10 symbols or more!";
    }

    return errors;
  };

  // Formik

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
  });

  return (
    <section className={classes.wrapper} name="Contact">
      <div className={classes.width}>
        <div className={classes.image}>
          <img src={art} alt="art" />
        </div>
        <div className={classes.container}>
          <div className={classes["text-wrapper"]}>
            <h1>
              Get in touch <MdOutlineTouchApp />
            </h1>
            <p>
              If you would like to book a workshop or commission, a piece of art
              to your specific requirements, please contact me.
            </p>
            <p>
              Phone: <AiOutlinePhone /> +380951657286 - Viber <FaViber />,
              WhatsApp <FaWhatsapp />, Telegram <FaTelegram />
            </p>
            <p>Email: shershun2022@gmail.com</p>
            <a
              href="https://www.facebook.com/people/Shershun-Ivan/100005922678012/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook /> Page
            </a>
            <a
              href="https://www.instagram.com/shershun_/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram /> Page
            </a>
            <p>Or complete the form below</p>
          </div>

          <form className={classes.form} action="..." method="POST">
            <input
              type="text"
              name="name"
              id="text"
              placeholder="Enter your name..."
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <p className={classes.warning}>{formik.errors.name}</p>
            ) : null}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <p className={classes.warning}>{formik.errors.email}</p>
            ) : null}

            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Enter your message..."
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className={classes.warning}>{formik.errors.message}</p>
            ) : null}

            {/* Button */}

            <div className={classes.btn}>
              <button
                type="submit"
                className={
                  formik.isValid
                    ? classes["submit-btn"]
                    : classes["submitBtn-disabled"]
                }
                disabled={!formik.isValid}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            <h1>Welcome to [Your Restaurant Name]!</h1>

            At Resto Lyf, we take pride in serving delicious, high-quality food in a warm and friendly atmosphere. Located in the heart of Bengaluru, our restaurant offers a unique blend of local and international cuisine, made with the freshest ingredients.
            Join us for a memorable dining experience, whether it’s a casual meal or a special celebration. Our dedicated team is here to make you feel at home and ensure you enjoy every moment.
            Thank you for choosing [Your Restaurant Name]. We look forward to welcoming you soon!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
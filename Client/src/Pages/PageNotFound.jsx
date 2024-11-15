import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const PageNotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.jpeg" alt="notFound" className="notfound"/>
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
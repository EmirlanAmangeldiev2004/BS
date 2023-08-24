import React from "react";
import "./Hero.scss";
import img from "../../Main/Hero/MainImage.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <img className="bc" src={img} alt="" />
      <div className="container">
        <div className="hero">
          <h1>Welcome to our Bookshop</h1>
          <p>A place where you can get all the books you want!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

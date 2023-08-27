import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Genres from "./Genres/Genres";
import Books from "./Books/Books";
import NewBooks from "./NewBooks/NewBooks";

const Main = ({ setCount }) => {
  return (
    <div>
      <Hero />
      <Genres />
      <NewBooks />
      <Books setCount={setCount} />
      <About />
    </div>
  );
};

export default Main;

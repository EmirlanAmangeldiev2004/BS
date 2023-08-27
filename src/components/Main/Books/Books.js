import React from "react";
import "./Books.scss";
import { books } from "../../FaceBack/books";
import { NavLink } from "react-router-dom";
import BooksCard from "./BooksCard";

const Books = ({ setCount }) => {
  return (
    <div id="books">
      <div className="container">
        <div className="books">
          <div className="books--title">
            <h1>Books</h1>
            <NavLink to={"/allBooks"}>
              <p onClick={() => window.scroll(0, 0)}>View all</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="cards">
        {books.map((el) => (
          <BooksCard setCount={setCount} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Books;

import React from "react";
import "./Books.scss";
import { books } from "../../FaceBack/books";
import { NavLink } from "react-router-dom";

const Books = () => {
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
          <div className="books--cards--card">
            <img src={el.img} alt="" />
            <h3>{el.name}</h3>
            <p>{el.by}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

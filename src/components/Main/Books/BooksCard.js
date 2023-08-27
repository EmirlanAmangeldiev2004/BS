import React from "react";
import { NavLink } from "react-router-dom";

const BooksCard = ({ el, setCount }) => {
  return (
    <div>
      <NavLink to={"/product/details"}>
        <div
          onClick={() => setCount(el.id) || window.scroll(0, 0)}
          className="books--cards--card"
        >
          <img src={el.img} alt="" />
          <h3>{el.name}</h3>
          <p>{el.by}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default BooksCard;

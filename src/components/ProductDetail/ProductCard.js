import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ el, setCount }) => {
  return (
    <div>
      <NavLink to={"/product/:id"}>
        <div
          onClick={() => setCount(el.id)}
          className="allBooks--filterBooks--filter--sort--cards--card"
        >
          <img src={el.img} alt="imgBook" />
          <h3>{el.name}</h3>
          <p>{el.by}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;

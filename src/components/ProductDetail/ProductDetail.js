import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { books } from "./../FaceBack/books";
import { FiHeart } from "react-icons/fi";
import { BiMinus, BiShareAlt } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
// import { useEffect } from "react";

const ProductDetail = ({ count, setCart, cart, createData, product }) => {
  const { name, img, by, descr, price, id } = books[count - 1];
  const [add, setAdd] = useState(0);
  const [kol, setKol] = useState(1);

  function pushData() {
    let data = JSON.parse(localStorage.getItem("book")) || [];

    if (data.some((el) => el.id === id)) {
      const newFilteredData = data.filter((el) => el.id !== id);
      const newCurrentData = data.find((el) => el.id === id);

      const newData = [
        ...newFilteredData,
        {
          ...newCurrentData,
          price: newCurrentData.price + price,
          quantity: newCurrentData.quantity + kol,
        },
      ];

      localStorage.setItem("book", JSON.stringify(newData));
    } else {
      let newObj = {
        name: name,
        img: img,
        by: by,
        descr: descr,
        price: price,
        id: id,
        quantity: 1,
      };
      createData(newObj);
    }
  }

  return (
    <section id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail--card">
            <img src={img} alt="" />
            <div className="detail--card--text">
              <div className="detail--card--text--name">
                <h1>{name}</h1>
                <FiHeart className="detail--card--text--name--icon" />
                <BiShareAlt className="detail--card--text--name--icon" />
              </div>
              <h5>{by}</h5>
              <p>{descr}</p>
              <h2>{`$${price}`}</h2>
              <div className="detail--card--text--btns">
                <button
                  onClick={() => {
                    pushData();
                    setAdd(1);
                  }}
                  className="detail--card--text--btns--addBtn"
                >
                  Add to Cart
                </button>

                <div className="detail--card--text--btns--howMuch">
                  <button
                    onClick={() => setKol(kol > 1 ? kol - 1 : 1)}
                    className="detail--card--text--btns--howMuch--plus"
                  >
                    <BiMinus />
                  </button>
                  <h6>{kol}</h6>
                  <button
                    onClick={() => setKol(kol + 1)}
                    className="detail--card--text--btns--howMuch--minus"
                  >
                    <BsPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

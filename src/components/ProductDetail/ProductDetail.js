import React from "react";
// import { NavLink } from "react-router-dom";
import { books } from "./../FaceBack/books";
import { FiHeart } from "react-icons/fi";
import { BiMinus, BiShareAlt } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

const ProductDetail = ({ count }) => {
  const { name, img, by, descr } = books[count - 1];
  console.log(books[count - 1]);

  console.log();
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
              <h2>
                $<span>99</span>
              </h2>
              <div className="detail--card--text--btns">
                <button className="detail--card--text--btns--addBtn">
                  Add to Cart
                </button>
                <div className="detail--card--text--btns--howMuch">
                  <button className="detail--card--text--btns--howMuch--plus">
                    <BiMinus />
                  </button>
                  <h6>1</h6>
                  <button className="detail--card--text--btns--howMuch--minus">
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

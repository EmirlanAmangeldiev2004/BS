import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PayPal from "../MyCart/payPal.svg";

const MyCart = ({ readData, product, deleteData, setCart, cart }) => {
  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    deleteData();
  }, []);

  const sum = product.map((el) => {
    return el.price;
  });

  const res = sum.reduce((acc, el) => {
    return acc + el;
  }, 0);

  const [arrow, setArrow] = useState("right click");
  const [arrow1, setArrow1] = useState("right click");
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClass1, setMenuClass1] = useState("menu1 hidden1");

  function updateArrow() {
    !menu
      ? setArrow("down unclick") || setMenuClass("menu visible")
      : setArrow("right click") || setMenuClass("menu hidden");
    setMenu(!menu);
    setMenu1(
      false
        ? setArrow1("down unclick") || setMenuClass("menu visible")
        : setArrow1("right click") || setMenuClass("menu hidden1")
    );
  }

  function updateArrow1() {
    !menu1
      ? setArrow1("down unclick") || setMenuClass("menu visible")
      : setArrow1("right click") || setMenuClass("menu hidden1");
    setMenu1(!menu1);
    setMenu(
      false
        ? setArrow("down unclick") || setMenuClass("menu visible")
        : setArrow("right click") || setMenuClass("menu hidden")
    );
  }

  return (
    <section id="myCart">
      <div className="container">
        <div className="myCart">
          <h1>Your cart</h1>
          <div className="myCart--text">
            <p className="myCart--text--p">Not ready to checkout?</p>
            <NavLink to={"/allBooks"}>
              <p className="myCart--text--containue">Continue Shopping</p>
            </NavLink>
          </div>
          <div className="myCart--box">
            <div className="myCart--box--basket">
              {product.map((el) => (
                <div className="myCart--box--basket--card">
                  <img src={el.img} alt="" />
                  <div className="myCart--box--basket--card--text">
                    <h2>{el.name}</h2>
                    <p className="myCart--box--basket--card--text--by">
                      {el.by}
                    </p>
                    <p className="myCart--box--basket--card--text--quantity">
                      Quantity: {el.quantity}
                    </p>
                    <h3>$ {el.price}</h3>
                  </div>
                  <button onClick={() => deleteData(el.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="myCart--box--num">
              <div className="numBlock">
                <h2>Order Summary</h2>
                <div className="myCart--box--num--shipping">
                  <h4>Shipping</h4>
                  <div className="select" onClick={updateArrow}>
                    <p>Select Method</p>
                    <span className={arrow}></span>
                  </div>
                </div>
                <div className="myCart--box--num--checkout">
                  {!menu ? null : (
                    <div className={menuClass}>
                      <div className="myCart--box--num--checkout--card1">
                        <label>
                          <div className="myCart--box--num--checkout--card1--checkbox"></div>
                          UPS Ground Shipping
                        </label>
                        <p>3-5 Business Days</p>
                      </div>
                      <div className="myCart--box--num--checkout--card2">
                        <label>
                          <div className="myCart--box--num--checkout--card1--checkbox"></div>
                          UPS/USPS Surepost
                        </label>
                        <p>4-7 Business Days</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="myCart--box--num--payment">
                  <h4>Payment</h4>
                  <div className="select" onClick={updateArrow1}>
                    <p>Select Method</p>
                    <span className={arrow1}></span>
                  </div>
                </div>
                <div className="myCart--box--num--pay">
                  {!menu1 ? null : (
                    <div className="myCart--box--num--pay--cart">
                      <div className="myCart--box--num--pay--cart--btns">
                        <button className="myCart--box--num--pay--cart--btns--payPal">
                          <img src={PayPal} alt="payPal" />
                        </button>
                        <button className="myCart--box--num--pay--cart--btns--creditCard">
                          Credit Card
                        </button>
                      </div>
                      <label className="myCart--box--num--pay--cart--cardholder">
                        Cardholder Name
                        <input type="text" />
                      </label>
                      <label className="myCart--box--num--pay--cart--cardNumber">
                        Card Number
                        <input type="text" />
                      </label>
                      <div className="myCart--box--num--pay--cart--inps">
                        <div className="monthYear">
                          <label className="myCart--box--num--pay--cart--inps--month">
                            Month
                            <input type="text" />
                          </label>
                        </div>
                        <div className="monthYear">
                          <label className="myCart--box--num--pay--cart--inps--year">
                            Year
                            <input type="text" />
                          </label>
                        </div>
                      </div>
                      <label className="myCart--box--num--pay--cart--CVC">
                        CVC
                        <input type="text" />
                      </label>
                    </div>
                  )}
                </div>
                <div className="myCart--box--num--total">
                  <h4>Total</h4>
                  <p>${res}</p>
                </div>
              </div>
              <button className="myCart--box--num--btn">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;

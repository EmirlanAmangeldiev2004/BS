import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const MyCart = ({ readData, product, deleteData, setCart, cart }) => {
  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    deleteData();
  }, []);
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
            <div className="myCart--box--num"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;

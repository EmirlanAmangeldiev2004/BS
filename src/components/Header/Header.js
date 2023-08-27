import React, { useState } from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <nav className="header--nav">
            <NavLink to={"/"}>
              <h3 onClick={() => window.scroll(0, 0)}>Bookshop</h3>
            </NavLink>
            <NavLink to={"/"}>
              <li onClick={() => window.scroll(0, 560)}>Categories</li>
            </NavLink>
            <NavLink to={"/"}>
              <li onClick={() => window.scroll(0, 1080)}>Recent</li>
            </NavLink>
            <NavLink to={"/"}>
              <li onClick={() => window.scroll(0, 1750)}>Books</li>
            </NavLink>
            <NavLink to={"/"}>
              <li onClick={() => window.scroll(0, 2450)}>About Us</li>
            </NavLink>
          </nav>
          <div className="header--icons">
            <div className="header--icons--search">
              <BiSearch className="header--icons--search--bisearch" />
            </div>
            <NavLink to={"/myCart"}>
              <div className="header--icons--shop">
                <BiShoppingBag />
                <p>{cart}</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

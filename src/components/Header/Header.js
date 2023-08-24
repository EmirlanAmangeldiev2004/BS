import React from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <nav className="header--nav">
            <NavLink to={"/"}>
              <h2>Bookshop</h2>
            </NavLink>
            <NavLink>
              <li>Categories</li>
            </NavLink>
            <NavLink>
              <li>Recent</li>
            </NavLink>
            <NavLink to={"/books"}>
              <li>Books</li>
            </NavLink>
            <NavLink>
              <li>About Us</li>
            </NavLink>
          </nav>
          <div className="header--icons">
            <BiSearch />
            <div className="header--icons--shop">
              <BiShoppingBag />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { books } from "../FaceBack/books";

const Header = ({ cart }) => {
import { NavLink, useNavigate } from "react-router-dom";
import { books } from "../FaceBack/books";

const Header = ({ cart }) => {
const Header = () => {
  const [search, setSearch] = useState(true);
  const [value, setValue] = useState("");
  const [card, setCard] = useState("");

  const filter1 = books.filter((el) => {
    return el.name.toLowerCase().includes(value.toLowerCase());
  });
return el.name.toLowerCase().includes(value.toLowerCase())
  })

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
              <BiSearch
                className="header--icons--search--bisearch"
                onClick={() => {
                  setSearch(!search);
                  setCard(!card);
                }}
              />
              <NavLink to={"/allBooks"} onClick={() => setSearch(false)}>
                <input
                  onChange={(e) => setValue(e.target.value)}
              <BiSearch className="header--icons--search--bisearch" />
            </div>
            <BiSearch />
            <NavLink to={"/myCart"}>
              <div className="header--icons--shop">
                <BiShoppingBag />
                <p>{cart}</p>
              </div>
            </NavLink>
               <div className="header--icons--search">
                   <BiSearch 
                      className="header--icons--search--bisearch"
                      onClick={()=>{
                         setSearch(!search);
                         setCard(!card);
                      }}/>
                       <input
                       onChange={(e) => setValue(e.target.value)}
                            style={{    
                                    width: search ? '0' : '180px',
                                    paddingLeft:search ? "0" : "35px",
                                   }}
                            type="text"
                        />      
                </div>  
                 <div
                  className="header--icons__block"
                  style={{
                    width: search ? "0" : "180px",
                    paddingLeft: search ? "0" : "35px",
                  }}
                  type="text"
                />
              </NavLink>
            </div>
            {/* <div
              className="header--icons__block"
              style={{
                display: card ? "block" : "none",
              }}
            >
              {filter1.map((el, idx) => (
                <NavLink to={"/product/details"}>
                  <div className="header--icons__block__title">
                    <h6>{idx + 1}.</h6>
                    <h5>{el.name}</h5>
                  </div>
                </NavLink>
              ))}
            </div> */}
            <NavLink to={"/myCart"}>
              <div className="header--icons--shop">
                <BiShoppingBag className="shop" />
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

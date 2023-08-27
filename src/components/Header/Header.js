import React, { useState } from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { books } from "../FaceBack/books";

const Header = () => {
  const [search, setSearch] = useState(true);
  const [value , setValue] = useState('');
  const [card, setCard] = useState("");

  const filter1 = books.filter((el) => {
    // return el.name.includes(value)
return el.name.toLowerCase().includes(value.toLowerCase())
  })
  // const { name, img, by, descr } = books[count - 1];

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
               <div className="header--icons--search">
                   <BiSearch 
                      className="header--icons--search--bisearch"
                      onClick={()=>{
                         setSearch(!search);
                         setCard(!card);
                      }}/>
                       <input
                       onChange={(e) => setValue(e.target.value)}
                            // onKeyDown={(e)=>{
                              
                            // }}  
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
                    display: card? "block" : "none",
                  }}
                  >
                    {filter1.map((el, idx) => (
                      <div className="">
                        <h6>{idx+1}</h6>
                        <h5>{el.name}</h5>
                      </div>
                    ))
                    }
                 </div>
                <div className="header--icons--shop">
                 <BiShoppingBag className="shop" />
                 <p>0</p>
                </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

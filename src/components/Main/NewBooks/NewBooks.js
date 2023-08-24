import React from "react";
import "./NewBooks.scss";
import book1 from "../NewBooks/book1.svg";
import book2 from "../NewBooks/book2.svg";
import book3 from "../NewBooks/book3.svg";

const NewBooks = () => {
  return (
    <div id="new">
      <div className="container">
        <div className="new">
          <h1>New Books</h1>
          <div className="new-blocks">
            <div className="new-blocks_card1">
              <img src={book1} alt="" />
              <h4>The Climate Book: The Facts and the Solutions</h4>
              <p>by Greta Thunberg</p>
            </div>
            <div className="new-blocks_card2">
              <img src={book2} alt="" />
              <h4>Rest Is Resistance: A Manifesto</h4>
              <p>by Tricia Hersey</p>
            </div>
            <div className="new-blocks_card3">
              <img src={book3} alt="" />
              <h4>A New Name: Septology VI-VII</h4>
              <p>by Jon Fosse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooks;

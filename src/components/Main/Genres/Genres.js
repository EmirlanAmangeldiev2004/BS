import React from "react";
import "./Genres.scss";
import Card from "../Genres/1card.svg";
import Card2 from "../Genres/3card.svg";
import Card3 from "../Genres/3card.svg";
import Card4 from "../Genres/4card.svg";
import Card5 from "../Genres/5card.svg";
import Card6 from "../Genres/6card.svg";

const Genres = () => {
  return (
    <div id="genres">
      <div className="container">
        <div className="genres">
          <div className="genres--title">
            <h1>Genres</h1>
            <p>View all</p>
          </div>
          <div className="genres--list">
            <div className="genres--list_card">
              <img src={Card} alt="" />
              <h4>Sci-Fi</h4>
            </div>
            <div className="genres--list_card">
              <img src={Card2} alt="" />
              <h4>For kids</h4>
            </div>
            <div className="genres--list_card">
              <img src={Card3} alt="" />
              <h4>Psychology</h4>
            </div>
            <div className="genres--list_card">
              <img src={Card4} alt="" />
              <h4>Romantic</h4>
            </div>
            <div className="genres--list_card">
              <img src={Card5} alt="" />
              <h4>Detective</h4>
            </div>
            <div className="genres--list_card">
              <img src={Card6} alt="" />
              <h4>Finance</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;

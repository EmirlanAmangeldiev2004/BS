import React from "react";
import dropdown from "../img/dropdown.svg";
import { books } from "./../FaceBack/books";
import ProductCard from "./../ProductDetail/ProductCard";

const AllBooks = ({ setCount }) => {
  return (
    <section id="allBooks">
      <div className="container">
        <div className="allBooks">
          <h1>All Books</h1>
          <p>Here you can find all the allBooks you need</p>
          <div className="allBooks--filterBooks">
            <div className="allBooks--filterBooks--filter">
              <div className="allBooks--filterBooks--filter--text">
                <h3>Filter</h3>
                <p>Clear filters</p>
              </div>
              <h4>Genres</h4>
              <form className="allBooks--filterBooks--filter--form">
                <div className="allBooks--filterBooks--filter--form--gender">
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Autographed Books
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Sci-Fi
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      For kids
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      For teenagers
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Finance
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Detective
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Romantic
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Psychology
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Self-Improvement
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Educational
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Literature
                    </label>
                  </div>
                  <div className="allBooks--filterBooks--filter--form--gender--first">
                    <label>
                      <input type="radio" name="gender" />
                      Religion
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="allBooks--filterBooks--filter--sort">
              <div className="allBooks--filterBooks--filter--sort--sortBooks">
                <button>
                  Sort By <span>Popular</span>
                  <img src={dropdown} alt="" />
                </button>
              </div>
              <div className="allBooks--filterBooks--filter--sort--cards">
                {books.map((el) => (
                  <ProductCard setCount={setCount} el={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;

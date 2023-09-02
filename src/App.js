import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AllBooks from "./components/AllBooks/AllBooks";
import BooksCard from "./components/Main/Books/BooksCard";
import MyCart from "./components/MyCart/MyCart";

const App = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(0);
  const [product, setProduct] = useState([]);
  const [kol, setKol] = useState(1);

  function createData(obj) {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    data.push(obj);
    localStorage.setItem("book", JSON.stringify(data));
    setCart(data.length);
  }

  function readData() {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    setProduct(data);
  }

  function deleteData(id) {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    let newData = data.filter((el) => el?.id !== id);
    localStorage.setItem("book", JSON.stringify(newData));
    readData();
    setCart(newData.length);
  }

  console.log(cart);

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Main setCount={setCount} />} />
        <Route
          path="/product/details"
          element={
            <ProductDetail
              count={count}
              setCart={setCart}
              cart={cart}
              createData={createData}
              product={product}
              kol={kol}
              setKol={setKol}
            />
          }
        />
        <Route path="/product/details" element={<BooksCard count={count} />} />
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<AllBooks setCount={setCount} />} />
        <Route
          path="/product/details"
          element={<ProductDetail count={count} />}
        />
        <Route path="/allBooks" element={<AllBooks setCount={setCount} />} />
        <Route
          path="/myCart"
          element={
            <MyCart
              readData={readData}
              product={product}
              deleteData={deleteData}
              setCart={setCart}
              cart={cart}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

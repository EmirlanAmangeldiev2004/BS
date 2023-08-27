import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AllBooks from "./components/AllBooks/AllBooks";

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<AllBooks setCount={setCount} />} />
        <Route path="/product/details" element={<ProductDetail count={count} />}/>
        <Route path="/allBooks" element={<AllBooks setCount={setCount} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

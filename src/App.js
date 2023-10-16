import React from "react";
import "./App.css";
import Home from "./components/Home";
import Currosel from "./components/Currosel";
import ProductsContainer from "./components/ProductsContainer";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      <ProductsContainer />
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;

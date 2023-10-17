import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductsContainer from "./components/ProductsContainer";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
       
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <Home/>
            </Route>
          </Switch>
          <Route path="/productsContainer">
            <ProductsContainer />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Footer />
       
      </BrowserRouter>
    </div>
  );
}

export default App;

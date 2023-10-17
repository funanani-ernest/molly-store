import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import "./ProductsContainer.css";
import IMAGE1 from "../assests/IMAGE1.jpg";
import IMAGE2 from "../assests/IMAGE2.jpg";
import IMAGE3 from "../assests/IMAGE3.jpg";
import IMAGE4 from "../assests/IMAGE4.jpg";
import IMAGE5 from "../assests/IMAGE5.jpg";
import IMAGE6 from "../assests/IMAGE6.jpg";
import IMAGE7 from "../assests/IMAGE7.jpg";
import IMAGE8 from "../assests/IMAGE8.jpg";
import IMAGE9 from "../assests/IMAGE9.jpg";
import IMAGE10 from "../assests/IMAGE10.jpg";
import IMAGE11 from "../assests/IMAGE11.jpg";
import IMAGE12 from "../assests/IMAGE12.jpg";
import IMAGE13 from "../assests/IMAGE13.jpg";
import IMAGE14 from "../assests/IMAGE14.jpg";
import IMAGE15 from "../assests/IMAGE15.jpg";
import IMAGE16 from "../assests/IMAGE16.jpg";
import IMAGE17 from "../assests/IMAGE17.jpg";
import IMAGE18 from "../assests/IMAGE18.jpg";
import IMAGE19 from "../assests/IMAGE19.jpg";
import IMAGE20 from "../assests/IMAGE20.jpg";
import IMAGE21 from "../assests/IMAGE21.jpg";
import IMAGE22 from "../assests/IMAGE22.jpg";
import IMAGE23 from "../assests/IMAGE23.jpg";
import IMAGE24 from "../assests/IMAGE24.jpg";
import IMAGE25 from "../assests/IMAGE25.jpg";
import IMAGE26 from "../assests/IMAGE26.jpg";
import IMAGE27 from "../assests/IMAGE27.jpg";
import IMAGE28 from "../assests/IMAGE28.jpg";

const ProductsContainer = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const products = [
    { id: 1, image: IMAGE1, title: "Product 1", price: 90 },
    { id: 2, image: IMAGE2, title: "Product 2", price: 60 },
    { id: 3, image: IMAGE3, title: "Product 3", price: 60 },
    { id: 4, image: IMAGE4, title: "Product 1", price: 60 },
    { id: 5, image: IMAGE5, title: "Product 2", price: 60 },
    { id: 6, image: IMAGE6, title: "Product 3", price: 60 },
    { id: 7, image: IMAGE7, title: "Product 1", price: 60 },
    { id: 8, image: IMAGE8, title: "Product 2", price: 60 },
    { id: 9, image: IMAGE9, title: "Product 3", price: 60 },
    { id: 10, image: IMAGE10, title: "Product 1", price: 60 },
    { id: 11, image: IMAGE11, title: "Product 2", price: 60 },
    { id: 12, image: IMAGE12, title: "Product 3", price: 60 },
    { id: 13, image: IMAGE13, title: "Product 1", price: 60 },
    { id: 14, image: IMAGE14, title: "Product 2", price: 60 },
    { id: 15, image: IMAGE15, title: "Product 3", price: 60 },
    { id: 16, image: IMAGE16, title: "Product 3", price: 60 },
    { id: 17, image: IMAGE17, title: "Product 1", price: 60 },
    { id: 18, image: IMAGE18, title: "Product 2", price: 60 },
    { id: 19, image: IMAGE19, title: "Product 3", price: 60 },
    { id: 20, image: IMAGE20, title: "Product 1", price: 60 },
    { id: 21, image: IMAGE21, title: "Product 2", price: 60 },
    { id: 22, image: IMAGE22, title: "Product 3", price: 60 },
    { id: 23, image: IMAGE23, title: "Product 1", price: 60 },
    { id: 24, image: IMAGE24, title: "Product 2", price: 60 },
    { id: 25, image: IMAGE25, title: "Product 3", price: 60 },
    { id: 26, image: IMAGE26, title: "Product 1", price: 60 },
    { id: 27, image: IMAGE27, title: "Product 2", price: 60 },
    { id: 28, image: IMAGE28, title: "Product 3", price: 60 },
  ];
  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    const updatedCart = [...cart, productToAdd];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  return (
    <div className="prod">
      <h1 className="pro-header">Featured Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};
export default ProductsContainer;

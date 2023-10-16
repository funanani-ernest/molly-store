import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import './ProductsContainer.css'
import IMAGE1 from '../assests/IMAGE1.jpg'

const ProductsContainer = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1,image: IMAGE1 , title: "Product 1", price: 10 },
    { id: 2,image: IMAGE1 ,  title: "Product 2", price: 15 },
    { id: 3, image: IMAGE1 ,title: "Product 3", price: 20 },
    { id: 1,image: IMAGE1 , title: "Product 1", price: 10 },
    { id: 2,image: IMAGE1 ,  title: "Product 2", price: 15 },
    { id: 3, image: IMAGE1 ,title: "Product 3", price: 20 },
    { id: 1,image: IMAGE1 , title: "Product 1", price: 10 },
    { id: 2,image: IMAGE1 ,  title: "Product 2", price: 15 },
    { id: 3, image: IMAGE1 ,title: "Product 3", price: 20 },
  ];

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1> Molly Online Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      {/* <Cart cart={cart} removeFromCart={removeFromCart} /> */}
    </div>
  );
};

export default ProductsContainer;

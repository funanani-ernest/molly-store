import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const { id, title, price, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      {/* <h3>{title}</h3> */}
      <p>Price: R{price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

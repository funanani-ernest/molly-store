import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const { id, title, price, image } = product;

  const handleAddToCart = () => {
    const whatsappNumber = "0818836917"; // Replace with your WhatsApp number
    const message = encodeURIComponent(`Hello! I'd like to buy ${title}`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      {/* <h3>{title}</h3> */}
      <p>Price: R{price}</p>
      <button onClick={handleAddToCart}>Buy</button>
    </div>
  );
};

export default ProductCard;

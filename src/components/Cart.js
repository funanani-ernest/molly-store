import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  console.log('Received Cart:', cart); // Add this line

  return (
    <div className="cart">
      {/* <h2>Shopping Cart</h2>
      <ul>
  {cart.map(item => (
    <li key={item.id}>
      {item.title} - ${item.price}
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  ))}
</ul>
   */}
    </div>
  );
};


export default Cart;

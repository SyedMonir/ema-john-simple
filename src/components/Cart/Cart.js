import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  return (
    <div>
      <h5>Order Summary</h5>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${}</p>
      <p>Total Shipping Charge: ${}</p>
      <p>Total Tax: ${}</p>
      <h6>Grand Total: ${}</h6>
    </div>
  );
};

export default Cart;

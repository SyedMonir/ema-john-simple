import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

  let total = 0;
  let shipping = 0
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  };

  const tax = (total * 0.1).toFixed(2);

  const grandTotal = total + shipping + parseFloat(tax);

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;

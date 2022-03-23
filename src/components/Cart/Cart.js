import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tax;

  // console.log(quantity, total, shipping, tax, grandTotal);

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
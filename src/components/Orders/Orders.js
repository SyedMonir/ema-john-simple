import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((item) => product._id !== item._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <section className="shop-container">
      <section className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            handleRemoveProduct={handleRemoveProduct}
            product={product}
          ></ReviewItem>
        ))}
      </section>
      <section className="cart-container">
        <Cart cart={cart}>
          <Link to={'/shipment'}>
            <button>Processed Shipping</button>
          </Link>
        </Cart>
      </section>
    </section>
  );
};

export default Orders;

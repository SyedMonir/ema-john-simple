import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((item) => product.id !== item.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <section className="shop-container">
      <section className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
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

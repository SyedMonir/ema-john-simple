import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  // Add to cart button
  const handleAddToCart = (product) => {
      // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  };
  return (
    <section className="shop-container">
      <section className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </section>
      <section className="cart-container">
          <h5>Order Summary</h5>
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: ${}</p>
          <p>Total Shipping Charge: ${}</p>
          <p>Total Tax: ${}</p>
          <h6>Grand Total: ${}</h6>
      </section>
    </section>
  );
};

export default Shop;

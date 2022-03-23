import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load Products
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  // Load cart
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart= [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        // console.log(addedProduct);
      };
    };
    setCart(savedCart);
  }, [products]);

  // Add to cart button
  const handleAddToCart = (selectedProduct) => {
    let newCart;
    const exist = cart.find(product => product.id === selectedProduct.id);
    if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    // Add to local storage
    addToDb(selectedProduct.id);
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
        <Cart cart={cart}></Cart>
      </section>
    </section>
  );
};

export default Shop;

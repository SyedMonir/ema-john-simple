import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Local storage theke data antesi
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);
    // console.log(keys);
    fetch(`http://localhost:5000/productsByKeys`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (const id in storedCart) {
          // Id ta storage er key ta hobe
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            // id diye key paisi taile object access korar moto kore sss[id] dile value ta pavo
            addedProduct.quantity = quantity;
            // addedProduct e full product er data paisi sekane quantity set kore dilam
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return [cart, setCart];
};

export default useCart;

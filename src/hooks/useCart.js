import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Local storage theke data antesi
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      // Id ta storage er key ta hobe
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        // id diye key paisi taile object access korar moto kore sss[id] dile value ta pavo
        addedProduct.quantity = quantity;
        // addedProduct e full product er data paisi sekane quantity set kore dilam
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;

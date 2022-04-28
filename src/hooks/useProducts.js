const { useState, useEffect } = require('react');

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://vast-cove-97260.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default useProducts;

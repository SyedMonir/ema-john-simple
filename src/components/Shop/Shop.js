import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  // Load Products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // For Cart
  const [cart, setCart] = useCart(products);

  // Pagination
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:5000/productsCount`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  // console.log(pageCount);

  // For navigate
  const navigate = useNavigate();

  // Add to cart button
  const handleAddToCart = (selectedProduct) => {
    let newCart;
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    // Add to local storage
    addToDb(selectedProduct._id);
  };
  return (
    <section className="shop-container">
      <section className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </section>
      <section className="cart-container">
        <Cart cart={cart}>
          <button
            onClick={() => {
              navigate('/orders');
            }}
          >
            Review Order
          </button>
        </Cart>
      </section>

      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number + 1 ? 'selected' : ''}
            onClick={() => setPage(number + 1)}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </section>
  );
};

export default Shop;

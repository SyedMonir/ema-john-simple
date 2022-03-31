import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  // Load Products
  const [products] = useProducts();
  // console.log(products);

  // For Cart
  const [cart, setCart] = useCart(products);

  // Add to cart button
  const handleAddToCart = (selectedProduct) => {
    let newCart;
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
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

// use local storage to manage cart data
const addToDb = (_id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[_id];
  if (quantity) {
    // jegula add hoise storage e setar quantity r sathe 1 jog
    const newQuantity = quantity + 1;
    // jog kore seta set kore dilam
    shoppingCart[_id] = newQuantity;
  } else {
    // Jodi quantity na thake taile 1 set kortesi
    shoppingCart[_id] = 1;
  }
  // local storage e set kore dichhi
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (_id) => {
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (_id in shoppingCart) {
      delete shoppingCart[_id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart');
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };

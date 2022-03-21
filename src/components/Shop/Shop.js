import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products);
    return (
        <section className='shop-container'>
            <section className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}>
                    </Product>)
                }
            </section>
            <section className="cart-container">
                Cart
            </section>
        </section>
    );
};

export default Shop;
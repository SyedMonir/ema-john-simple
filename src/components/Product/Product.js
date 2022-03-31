import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, ratings, ratingsCount, seller } = product;
  if (name.length > 20) {
    // name = name.slice(0,20);
    // console.log(newName);
  }
  // name.length > 15 ? (name + '...') :
  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={img} />
        <h6> {name}</h6>
        <p className="product-price">
          Price: <span> ${price}</span>
        </p>
        <p className="cardFooter">
          Manufacturer : <span>{seller}</span>{' '}
        </p>
        <p className="rating">
          Rating: <span>{ratings}</span> ({ratingsCount} Users)
        </p>
      </Card>
      <button onClick={() => handleAddToCart(product)} className="addToCart">
        Add To Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;

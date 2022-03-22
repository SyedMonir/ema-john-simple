import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
  const { img, name, price, ratings, ratingsCount, seller } =
    props.product;
  console.log(name);
  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={img} />
        <h6>{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p className="cardFooter">Manufacturer : {seller}</p>
        <p className="rating">
          Rating: {ratings} ({ratingsCount} Users)
        </p>
      </Card>
      <button className="addToCart">Add To Cart</button>
    </div>
  );
};

export default Product;

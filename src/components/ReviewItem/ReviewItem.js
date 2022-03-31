import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, img, price, shipping, quantity } = product;
  return (
    <section className="review-item">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <section className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-price">{name}</p>
          <p className="">
            Price: <span> ${price}</span>
          </p>
          <p>
            Shipping Charge : <span>${shipping}</span>{' '}
          </p>
          <p className="">
            Quantity: <span>{quantity}</span>
          </p>
        </div>
        <div className="button-container">
          <button onClick={() => handleRemoveProduct(product)}>
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </section>
    </section>
  );
};

export default ReviewItem;

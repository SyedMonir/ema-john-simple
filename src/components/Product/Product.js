import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
    const { category, img, name, price, rating, seller } = props.product;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    <Card.Footer>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
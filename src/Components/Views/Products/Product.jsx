import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Product = ({product}) => {

    const url = `/ProductDetailed/${product.productId}`

    return (
        <Card className="my-2" style={{ maxWidth: '21rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={`/Img/${product.productId}.jpg`} style={{height: '12rem'}} />
                
            </Card.Body>
            <Card.Footer>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>{product.category}</li>
                        <li>{product.price} SEK</li>
                    </ul>
                </Card.Text>
                <Button variant="primary" href = {url}>Info</Button>
            </Card.Footer>
        </Card>
    )
}
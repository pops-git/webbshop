import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export const Product = ({product}) => {
    let history = useHistory()
    const price = parseInt(product.price).toLocaleString()

    const viewProduct = () => {
        history.push(`/ProductDetailed/${product.productId}`)
    }

    const cardStyle = {
        maxWidth: '21rem',
        minWidth: '21rem',
        boxShadow: '10px 10px 20px grey',
        textAlign: 'center'
    }

    return (
        <Card className="mx-auto" style={cardStyle}>
            <Card.Body>
                <Card.Img variant="top" src={`/Img/${product.productId}.jpg`} style={{height: '12rem'}} />
            </Card.Body>
            <Card.Footer>
                <Card.Title>{product.name}</Card.Title>
                    <h6>{product.category}</h6>
                    <h6>{price} SEK</h6>
                <Button variant="primary" onClick={() => {viewProduct()}}>Info</Button>
            </Card.Footer>
        </Card>
    )
}
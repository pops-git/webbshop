import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export const Product = ({product}) => {
    let history = useHistory()
    /* const url = `/ProductDetailed/${product.productId}` */

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
                <Card.Text>
                    <h6>{product.category}</h6>
                    <h6>{product.price} SEK</h6>
                </Card.Text>
                <Button variant="primary" onClick={() => {viewProduct()}}>Info</Button>
            </Card.Footer>
        </Card>
    )
}
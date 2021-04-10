import React, {useEffect, useState} from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductDetailed = () => {
    const {id} = useParams()
    const {product, getProduct, basket, setBasket} = useWebshop()

    const canShowProduct = product !== undefined

    useEffect(() => {
        getProduct(id)
    },[])

    const buyProduct = () => {
        setBasket(...basket, id)
    }

    if(canShowProduct){
        return (
            <Card className="mx-auto" bg='light' text='dark' style={{ width: '30rem', height: '45rem', marginTop: '3rem' }}>
                <Card.Header>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={`/Img/${product.productId}.jpg`} />
                    <Card.Text>
                    <table>
                        <tr><td>{product.description}</td></tr>
                        <tr><td>{product.category}</td></tr>
                        <tr><td>{product.price} SEK</td></tr>
                    </table>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => {buyProduct()}}>Buy</Button>
                </Card.Footer>
            </Card>
        )
    }
    else{
        return (
            <></>
        )
    }
}
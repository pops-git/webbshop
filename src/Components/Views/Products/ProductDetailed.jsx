import React, {useEffect} from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductDetailed = () => {
    const {id} = useParams()
    const {product, getProduct, addToBasket, isAuthenticated} = useWebshop()

    const canShowProduct = product !== undefined

    useEffect(() => {
        getProduct(id)
        // This is okay to ignore because we never change getProduct, or change id while on product page
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleClick = (e) => {
        e.preventDefault()
        addToBasket(product)
    }

    if(canShowProduct){
        return (
            <Card className="mx-auto" bg='light' text='dark' style={{ width: '30rem', height: '52rem', marginTop: '3rem' }}>
                <Card.Header>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={`/Img/${product.productId}.jpg`} /> <br/><br/>
                    <table>
                        <tr><td><h6>Description: </h6>{product.description}</td></tr>
                        <tr><td><h6>Category: </h6>{product.category}</td></tr>
                        <tr><td><h6>Price: </h6>{product.price} SEK</td></tr>
                    </table>
                </Card.Body>
                <Card.Footer>
                    {isAuthenticated ? <Button variant="primary" onClick={handleClick}>Buy</Button> : <></>}
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
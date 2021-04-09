import React from 'react';
import { Product } from "./Product";
import CardDeck from 'react-bootstrap/CardDeck'

export const ProductList = ({products}) => {
    let list = products.map(product => {
        return (
                <Product product = {product} />
        )
    })
    return (
        <CardDeck className="mx-auto my-5" style={{ width: "80%" }}>
            {list}
        </CardDeck>
    )
}
import React, { useEffect } from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { Product } from "./Product";
import CardDeck from 'react-bootstrap/CardDeck'

export const ShowProducts = () => {
    
    const {products, getProducts} = useWebshop()

    let productsList

    useEffect(() => {
        getProducts()
    }, [])

    if(products){
        productsList = products.map(product => {
            return (
                <Product product={product} key={product.productId}/>
            )
        })
    }
    else{
        productsList = (
            <p>no products found</p>
        )
    }
    return (
        <CardDeck className="mx-auto my-5" style={{ width: "80%" }}>
            {productsList}
        </CardDeck>
    )
}
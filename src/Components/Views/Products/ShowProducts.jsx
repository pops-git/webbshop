import React, { useEffect } from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { Product } from "./Product";
import CardDeck from 'react-bootstrap/CardDeck'

export const ShowProducts = () => {
    
    const {products, getProducts} = useWebshop()

    useEffect(() => {
        getProducts()
        // This is okay to ignore because we never change getProducts
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let productsList
    if(products){
        productsList = products.map(product => {
            return (
                <Product product={product} key={product.productId}/>
            )
        })
    }
    else{
        productsList = (
            <p>No products found, check your connection.</p>
        )
    }
    return (
        <CardDeck className="mx-auto my-5" style={{ width: "80%" }}>
            {productsList}
        </CardDeck>
    )
}
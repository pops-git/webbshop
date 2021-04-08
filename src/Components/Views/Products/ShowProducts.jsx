import React, { useEffect } from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { Product } from "./Product";

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
        <>
            {productsList}
        </>
    )
}
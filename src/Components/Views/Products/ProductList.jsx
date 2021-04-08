import React from 'react';
import { Product } from "./Product";

export const ProductList = ({products}) => {
    let list = products.map(product => {
        return (
            <>
                <Product product = {product} />
            </>
        )
    })
    return (
        <>
            {list}
        </>
    )
}
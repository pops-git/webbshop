import React from 'react'

export const BasketProduct = ({product}) => {
    const productPrice = parseInt(product.price).toLocaleString()

    return (
        <div>
            <h6>{product.name}</h6>
            <p>{productPrice} SEK</p>
        </div>
    )
}

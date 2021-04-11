import React from 'react'
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { BasketProduct } from "./BasketProduct";
import Button from 'react-bootstrap/Button';

export const Basket = () => {
    const{basket, totalPrice} = useWebshop()
    const total = parseInt(totalPrice).toLocaleString()

    let list = basket.map(product => {
        return (
                <BasketProduct product = {product} />
        )
    })

    const style = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }

    return (
        <div style={style}>
            {list}
            <br/>
            <h6>Total price: {total} SEK</h6>
            <Button style={{width: "10rem"}}>Place order</Button>
        </div>
    )
}

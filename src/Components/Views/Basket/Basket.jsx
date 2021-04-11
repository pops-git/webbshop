import React from 'react'
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { BasketProduct } from "./BasketProduct";
import Button from 'react-bootstrap/Button';

export const Basket = () => {
    const{basket, totalPrice, placeOrder} = useWebshop()
    const total = parseInt(totalPrice).toLocaleString()

    const order = () => {
        placeOrder()
    }

    let list = basket.map((product, index) => {
        return (
                <BasketProduct product = {product} key = {index} />
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
            <Button style={{width: "10rem"}} onClick={order}>Place order</Button>
        </div>
    )
}

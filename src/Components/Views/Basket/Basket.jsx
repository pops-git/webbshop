import React from 'react'
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { BasketProduct } from "./BasketProduct";
import Button from 'react-bootstrap/Button';

export const Basket = () => {
    const{basket, totalPrice, placeOrder, hasOrdered} = useWebshop()
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
        width: "15rem",
        margin: "auto",
        marginTop: "5rem"
    }

    if(!hasOrdered){
        return (
            <div style={style}>
                {list}
                <br/>
                <h6>Total price: {total} SEK</h6>
                <Button style={{width: "10rem"}} onClick={order}>Place order</Button>
            </div>
        )
    }
    else{
        return (
            <div style={style}>
                <h6 style={{color: "green"}}>Your order has been recieved!</h6>
            </div>
        )
    }
    
}

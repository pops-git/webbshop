import React, { useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GetUserByLoginCredentials } from "../Functions/API/GetUserByLoginCredentials";
import { GetProducts } from "../Functions/API/GetProducts";
import { PostOrder } from "../Functions/API/PostOrder";
import { PostOrderDetail } from "../Functions/API/PostOrderDetail";
import { CreateOrderBody } from "../Functions/CreateOrderBody";
import { CreateOrderDetailsBody } from "../Functions/CreateOrderDetailsBody";
import { GetProductById } from "../Functions/API/GetProductById";

const webshopContext = createContext()

export function useWebshop(){
    return useContext(webshopContext)
}

export function ProductsProvider ({children}) {
    const[products, setProducts] = useState("")
    const[product, setProduct] = useState("")
    const[user, setUser] = useState("")
    const[isAuthenticated, userHasAuthenticated] = useState(false);
    const[basket, setBasket] = useState([])
    const[totalPrice, setTotalPrice] = useState(0)
    let history = useHistory()

    function countInArray(array, value) {
        return array.reduce((n, x) => n + (x === value), 0);
    }

    const placeOrder = async () => {
        let jsonOrderBody = await CreateOrderBody(user, totalPrice)
        console.log(jsonOrderBody)
        let data = await PostOrder(jsonOrderBody)
        console.log(data.orderId)
        
        let uniqueBasket = [...new Set(basket)]
        uniqueBasket.forEach(async (product) => {
            let quantity = countInArray(basket, product)
            let jsonOrderDetailsBody = await CreateOrderDetailsBody(data.orderId, product.productId, quantity)
            await PostOrderDetail(jsonOrderDetailsBody)
        })
        

        
        setBasket([])
        setTotalPrice(0)
    }

    const getProducts = async () => {
        let productArr = await GetProducts()
        setProducts(await productArr)
    }

    const searchProducts = async (searchValue) => {
        let productArr = await GetProducts()
        let searchedProducts = productArr.filter(product => (product.name || product.description || product.category)
                                                        .toLowerCase().includes(searchValue.toLowerCase()));
        history.push('/Search')
        setProducts(searchedProducts)
    }

    const getProduct = async (id) => {
        let productInfo = await GetProductById(id)
        setProduct(await productInfo)
    }

    const loginUser = async (email, password) => {
        let userObj = await GetUserByLoginCredentials(email, password)
        setUser(await userObj)
        if(userObj !== undefined){
            userHasAuthenticated(true)
        }
    }

    const addToBasket = (product) => {
        setBasket([...basket, product])
        setTotalPrice(parseInt(totalPrice) + parseInt(product.price))
    }

    const value = {
        placeOrder,

        isAuthenticated,
        userHasAuthenticated,

        basket,
        addToBasket,

        totalPrice,
        products,
        getProducts,
        searchProducts,
        product,
        getProduct,

        user,
        loginUser
    }
    return (
        <webshopContext.Provider value={value}>{children}</webshopContext.Provider>
    )
}
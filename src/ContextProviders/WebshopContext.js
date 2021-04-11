import React, { useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GetUserByLoginCredentials } from "../Functions/API/GetUserByLoginCredentials";
import { GetProducts } from "../Functions/API/GetProducts";
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

    const placeOrder = async () => {
        
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
import React, { useState, createContext, useContext } from 'react';
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

    const getProducts = async () => {
        let productArr = await GetProducts()
        setProducts(await productArr)
    }

    const getProduct = async (id) => {
        let productInfo = await GetProductById(id)
        setProduct(await productInfo)
    }

    const getUser = async (email, password) => {
        let userObj = await GetUserByLoginCredentials(email, password)
        setUser(await userObj)
    }

    const value = {
        products,
        getProducts,
        product,
        getProduct,
        user,
        getUser
    }
    return (
        <webshopContext.Provider value={value}>{children}</webshopContext.Provider>
    )
}
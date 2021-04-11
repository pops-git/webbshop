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
    const[hasOrdered, setHasOrdered] = useState(false);
    const[basket, setBasket] = useState([])
    const[totalPrice, setTotalPrice] = useState(0)
    let history = useHistory()

    function countInArray(array, what) {
        return array.filter(item => item === what).length;
    }
    function removeDuplicates(data){
        return [...new Set(data)]
    }

    const placeOrder = async () => {
        let jsonOrderBody = await CreateOrderBody(user, totalPrice)
        console.log(jsonOrderBody)
        let data = await PostOrder(jsonOrderBody)
        console.log(data.orderId)
        
        let listOfProductIds = basket.map(product => {
            return product.productId
        })
        console.log("listOfProductIds" + listOfProductIds)

        let orderedListOfProductIds = listOfProductIds.sort()
        console.log("orderedListOfProductIds" + orderedListOfProductIds)

        let uniqueListOfProductIds = removeDuplicates(orderedListOfProductIds)
        console.log("uniqueListOfProductIds: " + uniqueListOfProductIds)

        uniqueListOfProductIds.forEach(async (id) => {
            let quantity = countInArray(orderedListOfProductIds, id)
            console.log("quantity: " + quantity)
            let jsonOrderDetailsBody = await CreateOrderDetailsBody(data.orderId, id, quantity)
            await PostOrderDetail(jsonOrderDetailsBody)
        })
        

        setHasOrdered(true)
        setBasket([])
        setTotalPrice(0)
    }

    const getProducts = async () => {
        let productArr = await GetProducts()
        setProducts(await productArr)
    }

    const searchProducts = async (searchValue) => {
        let productArr = await GetProducts()
        const searchLower = searchValue.toLowerCase();
        const searchedProducts = productArr.filter(
          (product) =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.category.toLowerCase().includes(searchLower)
        )
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
        setHasOrdered(false)
        setBasket([...basket, product])
        setTotalPrice(parseInt(totalPrice) + parseInt(product.price))
    }

    const value = {
        hasOrdered,

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
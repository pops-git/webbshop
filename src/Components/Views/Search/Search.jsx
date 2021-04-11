import React from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { ProductList } from "../Products/ProductList";
import './Search.css';

export const Search = () => {
    const {products} = useWebshop()
    let canShowProducts = products !== undefined
    
    let productList
    if(canShowProducts){
        productList = (
            <ProductList products = {products} />
        )
    }
    else{
        productList = <></>
    }

    return (
        <>
            {productList}
        </>
    );
}
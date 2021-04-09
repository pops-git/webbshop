import React, {useState, useRef} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { GetProducts } from "../../../Functions/API/GetProducts";
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
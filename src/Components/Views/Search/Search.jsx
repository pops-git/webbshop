import React, {useState, useRef} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { GetProducts } from "../../../Functions/API/GetProducts";
import { ProductList } from "../Products/ProductList";
import './Search.css';


const SearchProduct = async (searchValue) => {

    const allProducts = await GetProducts()

    let searchedProducts = allProducts.filter(product => (product.name || product.description || product.category)
                                                        .toLowerCase().includes(searchValue.toLowerCase()));
    return searchedProducts
}


export const Search = () => {
    const[searchResult, setSearchResult] = useState()

    const canShowProducts = searchResult !== undefined
    const searchValue = useRef()

    const mySearch = async (searchval) => {
        setSearchResult(await SearchProduct(searchval))
    }

    let productList
    if(canShowProducts){
        productList = (
            <ProductList products = {searchResult} />
        )
    }
    else{
        productList = <></>
    }

    return (
        <>
            <div className="SearchBar">
                <InputGroup className="mb-3" size="lg">
                    <input type="text" placeholder="What are you looking for?" ref={searchValue} size="50"/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => mySearch(searchValue.current.value)}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            {productList}
        </>
    );
}
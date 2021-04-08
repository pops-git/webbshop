import React, {useState, useRef} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { GetProducts } from "../../../Functions/API/GetProducts";
import { ProductList } from "../Products/ProductList";


const SearchProduct = async (searchValue) => {

    const allProducts = await GetProducts()

    let searchedProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.description.toLowerCase().includes(searchValue.toLowerCase()));

    console.table(searchedProducts)

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
            <InputGroup className="mb-3"  size="lg">
                <input type="text" placeholder="Vad letar du efter?" ref={searchValue} size="100" />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => mySearch(searchValue.current.value)}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {productList}
        </>
    );
}
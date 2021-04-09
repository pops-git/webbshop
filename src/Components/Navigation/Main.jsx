import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Search } from "../Views/Search/Search";
import { Login } from "../Views/Login/Login";
import { ShowProducts } from "../Views/Products/ShowProducts";
import { ProductDetailed } from "../Views/Products/ProductDetailed";

export const Main = () => {
    return (
        <Switch>
            <Route exact path = "/" component = {ShowProducts} />
            <Route path = "/Search" component = {Search} />
            <Route path = "/Login" component = {Login}/>
            <Route path = "/ProductDetailed/:id" component = {ProductDetailed}/>
        </Switch>
    )
}
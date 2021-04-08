import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Search } from "../Views/Search/Search";
import { Login } from "../Views/Login/Login";
import { ShowProducts } from "../Views/Products/ShowProducts";

export const Main = () => {
    return (
        <Switch>
            <Route exact path = "/" component = {ShowProducts} />
            <Route path = "/Search" component = {Search} />
            <Route path = "/Login" component = {Login}/>
        </Switch>
    )
}
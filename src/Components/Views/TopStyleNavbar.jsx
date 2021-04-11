import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useWebshop } from "../../ContextProviders/WebshopContext";
import { Navbar,Nav, Form, FormControl } from 'react-bootstrap'

export const TopStyleNavbar = () => {
    const {searchProducts, isAuthenticated, userHasAuthenticated, basket} = useWebshop()
    const searchText = useRef()
    let history = useHistory()
    let basketHasItems = basket.length > 0

    console.log(isAuthenticated)

    const handleSubmit = (e) => {
        e.preventDefault()
        searchProducts(searchText.current.value)
    }

    const goHome = () => {
        history.push('/')
    }

    const signOut = () => {
        userHasAuthenticated(false)
        console.log("logging out...")
        history.push('/')
    }

    const goToBasket = () => {
        history.push('/Basket')
    }

    let loggedIn = (
        <Nav.Link href="/Login">Login</Nav.Link>
    )
    let myBasket = (
        <></>
    )

    if(isAuthenticated){
        loggedIn = (
            <Nav.Link onClick={signOut}>Logout</Nav.Link>
        )
        myBasket = (
            <Nav.Link onClick={goToBasket}>Basket ({basketHasItems ? basket.length : 0})</Nav.Link>
        )
    }

    return (
        <Navbar bg="dark" variant="dark">
            <div onClick={() => {goHome()}}>
                <Navbar.Brand>TopStyle Motorcycles</Navbar.Brand>
            </div>
            <Nav className="mr-auto container-fluid">
                {/* <Nav.Link  href="/">Home</Nav.Link> */}
                <Nav.Link onClick={() => {goHome()}}>Home</Nav.Link>
                {loggedIn}
                {myBasket}
                <Form className="ml-auto">
                    <FormControl type="text" ref={searchText} placeholder="Search here" className=" mr-sm-2" onChange={handleSubmit} />
                </Form>
            </Nav>
        </Navbar>
    )
}
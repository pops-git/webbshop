import React, {useRef} from 'react';
import { useWebshop } from "../../ContextProviders/WebshopContext";
import { Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap'

export const TopStyleNavbar = () => {
    const {products, searchProducts} = useWebshop()
    const searchText = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        searchProducts(searchText.current.value)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">TopStyle Motorcycles</Navbar.Brand>
            <Nav className="mr-auto container-fluid">
                <Nav.Link className="ml-auto" href="/">Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" ref={searchText} placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Nav>
        </Navbar>
    )
}
import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'

export const TopStyleNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">TopStyle</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Startsida</Nav.Link>
                <Nav.Link href="/Search">Search</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}
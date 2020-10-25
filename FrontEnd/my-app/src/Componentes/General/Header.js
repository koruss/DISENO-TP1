import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import './Header.css'


class Header extends Component {
    state = {

    }


    render() {
        return (
            <Navbar className="header" bg="dark" variant="dark">
                <Navbar.Brand href="/">Tinder++</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/user">Ingresa</Nav.Link>
                    <Nav.Link href="/friend">Features</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        )

    }

}
export default Header;
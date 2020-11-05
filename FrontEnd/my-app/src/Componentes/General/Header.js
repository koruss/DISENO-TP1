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
                <Navbar.Brand href="/" className="textito">Movilize!!</Navbar.Brand>
            </Navbar>
        )

    }

}
export default Header;
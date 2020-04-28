import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const image = require('../../logo.png');

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark"  expand="lg">
                <Navbar.Brand >
                <Link to="/">
                     <img 
                        src={ image } 
                        height="30"
                        width="30"
                        className="d-inline-block align-top" 
                        alt=" Home">
                    </img>
                    </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem >
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/about">About Us</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const image = require('../../logo.png');

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark"  expand="lg">
                <Navbar.Brand href="/"><strong><span style={{color:"rgb(40,167,69)"}}>B</span>reaking <span style={{color:"rgb(40,167,69)"}}>B</span>ad</strong></Navbar.Brand>
                <Navbar.Brand ><span style={{color:"rgb(40,167,69)"}}>R</span>ésultats (lien pas dispo)</Navbar.Brand>
            </Navbar>
        );
    }
}

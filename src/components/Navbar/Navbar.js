import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();

    return (
        // <Navbar collapseOnSelect expand="sm" variant="light" bg="light">
        //     <Navbar.Brand href="/">T/K</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        <ul className="nav nav-bar">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    About
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contact"
                    className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
                >
                    Contact
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/recordings"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                    Recordings
        </Link>
            </li>
        </ul>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar >
    );
}

export default Navbar;
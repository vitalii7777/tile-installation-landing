import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary custom-nav-bar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                    <strong>About Us</strong>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                    <strong>Gallery</strong>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                    <strong>Contact Us</strong>
                </NavLink>
            </li>
        </ul>

    </nav>
);

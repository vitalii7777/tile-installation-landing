import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
    <nav>
        <ul className="navbar">
            <li className="navBar-item">
                <NavLink className="navLink" to="/" exact>
                    <div>About Us</div>
                </NavLink>
            </li>
            <li className="navBar-item">
                <NavLink  className="navLink" to="/about">
                    <div>Gallery</div>
                </NavLink>
            </li>
            <li className="navBar-item">
                <NavLink className="navLink" to="/user">
                    <div>Contact Us</div>
                </NavLink>
            </li>
        </ul>

    </nav>
);

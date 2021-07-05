import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
    <nav>
        <ul className="navbar">

            <li className="navBar-item">
                <NavLink className="navLink" to="/" exact>
                    <div>Home</div>
                </NavLink>
            </li>

            <li className="navBar-item">
                <NavLink className="navLink" to="/about-us" exact>
                    <div>About Us</div>
                </NavLink>
            </li>

            <li className="navBar-item">
                <NavLink  className="navLink" to="/gallery">
                    <div>Gallery</div>
                </NavLink>
            </li>

            <li className="navBar-item">
                <NavLink className="navLink" to="/contactUs">
                    <div>Contact Us</div>
                </NavLink>
            </li>

        </ul>

    </nav>
);

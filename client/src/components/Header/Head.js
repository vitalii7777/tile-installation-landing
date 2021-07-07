import React, { useState } from "react";

import { ReactComponent as CloseMenu } from "./icons/x.svg";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as Logo } from "./icons/logo.svg";
import "./header.css";

export const Head = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <Logo className="logo" />
                    </a>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>

                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">ABOUT</a>
                    </li>

                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">CONTACT</a>
                    </li>

                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">BLOG</a>
                    </li>

                </ul>
            </div>

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};


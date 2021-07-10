import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloseMenu } from './icons/x.svg';
import { ReactComponent as MenuIcon } from './icons/menu.svg';
import { ReactComponent as Logo } from './icons/logo.svg';
import './header.css';

export const Head = ({ isHome }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const classes = isHome ? 'header-on-home' : 'header';

  return (
    <div className={classes}>
      <div className="logo-nav">
        <div className="logo-container">
          <div className="option">
            <NavLink className="navLink" to="/" exact>
              <Logo className="logo" />
            </NavLink>
          </div>
        </div>

        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option">
            <NavLink className="navLink" to="/" exact activeClassName="selected">
              <div>Home</div>
            </NavLink>
          </li>

          <li className="option">
            <NavLink className="navLink" exact activeClassName="selected" to="/about-us">
              <div>About Us</div>
            </NavLink>
          </li>

          <li className="option">
            <NavLink className="navLink" to="/gallery" activeClassName="selected">
              <div>Projects</div>
            </NavLink>
          </li>

          <li className="option">
            <NavLink className="navLink" to="/contactUs" activeClassName="selected">
              <div>Contact Us</div>
            </NavLink>
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

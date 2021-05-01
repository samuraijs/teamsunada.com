import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './nav.scss';

const MenuIcon = ({ onClick, isActive }) => {
  const iconHeight = 15;
  return (
    <button className="menu-icon" onClick={onClick}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect fill="currentColor" width="100" height={iconHeight} rx="8"></rect>
        <rect
          fill="currentColor"
          y="30"
          width="100"
          height={iconHeight}
          rx="8"
        ></rect>
        <rect
          fill="currentColor"
          y="60"
          width="100"
          height={iconHeight}
          rx="8"
        ></rect>
      </svg>
    </button>
  );
};

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  const onMenuClicked = () => {
    setMenuActive(!menuActive);
  };

  const onNavItemClick = () => {
    setMenuActive(false);
  };
  return (
    <nav
      className={classNames('nav', {
        active: menuActive,
      })}
    >
      <MenuIcon onClick={onMenuClicked} />
      {menuActive && (
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" onClick={onNavItemClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/story" onClick={onNavItemClick}>
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schedule" onClick={onNavItemClick}>
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logistics" onClick={onNavItemClick}>
              Logistics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" onClick={onNavItemClick}>
              FAQ
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;

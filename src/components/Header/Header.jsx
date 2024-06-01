import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-2 logo">
            <a href className="logo__link">
              <img src alt="" className="logo__image" />
            </a>
          </div>

          {/* Menu */}
          <div className="col-5 menu">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'isActive' : '') + ' menu__link'}
                >
                  Home
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/abouts"
                  className={({ isActive }) => (isActive ? 'isActive' : '') + ' menu__link'}
                >
                  About us
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? 'isActive' : '') + ' menu__link'}
                >
                  Products
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    (isActive ? 'menu__link isActive' : '') + ' menu__link'
                  }
                >
                  Contact me
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Search */}
          <div className="col-3 search">
            <div className="search__box">
              <input className="search__input" type="text" placeholder="Search..." />
              <i className="search__icon bi bi-search" />
            </div>
          </div>

          {/* Shop */}
          <div className="col-2 shop">
            <div className="shop__box">
              <NavLink to="/addtocard">
                <i className="shop__icon bi bi-bag-check-fill"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

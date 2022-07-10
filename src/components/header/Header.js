import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

import Logo from '../../assets/images/logo.svg';
import MenuLogo from '../../assets/images/menu-logo.svg';


function Header() {

  return (
    <>
      <header>
        <div className="row align-items-center justify-content-between">
          <div className="col-2 col-xl-2">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-10 col-xxl-10 ">
            <div className="litle-menu">
              <ul>
                <li>
                  <a href="">Cases</a>
                </li>
                <li>
                  <a href="">Menu</a>
                </li>
              </ul>
            </div>

            <div class="navigation">
              <input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
              <label for="nav-toggle" class="navigation__button">
                <span class="navigation__icon" aria-label="toggle navigation menu"></span>
              </label>
              <div class="navigation__background"></div>

              <div class="navigation__nav" role="navigation">

                <div className="logo-menu">
                  <img src={MenuLogo} alt="" />
                </div>
                <ul class="navigation__list">
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">Cases</a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">Service</a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">About</a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">Trusted</a>
                  </li>
                  <li class="navigation__item">
                    <a href="#" class="navigation__link">Get in touch</a>
                  </li>
                </ul>
                <div className="bottom-menu">
                  <div className="menu-section">
                    <div className="social-block"><a href="">Instagram</a></div>
                    <div className="social-block mp"><a href="">Linkedin</a></div>
                  </div>
                  <div className="menu-section">
                    <div className="social-block"><a href="">Dribbble</a></div>
                    <div className="social-block mp"><a href="" className="last">Behance</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

    </>

  );
}

export default Header;
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

import Logo from '../../assets/images/logo.svg';


function Header() {

  useEffect(() => {
    $(document).ready(function() {
      // header ul.nav dropdown on hover
      $('ul.language-switcher > li.dropdown').on('mouseover', function () {
        $(this).find('a.dropdown-toggle').addClass('hovered');
        $(this).find('ul.dropdown-menu').stop().slideDown(300);
      });

      $('ul.nav.language-switcher > li.nav-item.dropdown').on('mouseleave', function () {
        $(this).find('a.dropdown-toggle').removeClass('hovered');
        $(this).find('ul.dropdown-menu').stop().slideUp();
      });


      // burgermenu toggle
      $('.burgermenu-toggler').click(function() {
        $('body').addClass('overflow-hidden');
        $('.burgermenu').addClass('active');
        $('.burgermenu-overlay').fadeIn(400);
      });

      $('.burgermenu-close, .burgermenu-overlay').click(function() {
        $('body').removeClass('overflow-hidden');
        $('.burgermenu').removeClass('active');
        $('.burgermenu-overlay').fadeOut(400);
      });

    });
  }, []);

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
          <div className="col-10 col-xxl-10 d-none d-xl-block">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/work" className="nav-link" exact>
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link" exact>
                  Menu
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-auto d-xl-none">
            <div className="burgermenu-toggler">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="burgermenu">
        <div className="row custom-gy-30">
          <div className="col-12">
            <div className="row justify-content-end">
              <div className="col-auto">
                <div className="burgermenu-close">
                  <div className="icon close"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" exact>
                Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link" exact>
                Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bakeries" className="nav-link" exact>
                Trusted
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" exact>
                About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link" exact>
                Contact
                </NavLink>
              </li>
            </ul>
          </div> 
        </div>
      </div>
      <div className="burgermenu-overlay"></div>
    </>
  );
}

export default Header;
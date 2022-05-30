import React from 'react'

import logofooter from '../../assets/images/fotter-logo.svg'


export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row">

          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="fotter-main-content">
                  <div className="content">
                    <div className="fotter-main-title">
                      <h1>
                        Have an idea?
                      </h1>
                    </div>
                    <div className="fotter-main-description">
                      <h2>
                        Tell us about it
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="footer-main-logo">
                  <a href="#">
                    <img src={logofooter} className="logo" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-4">
                <div className="footer-section">
                  <div className="mail-block">
                    <a href="mailto:info@myplanetdesign.com">info@myplanetdesign.com</a>
                  </div>
                  <div className="adress-block">
                    <p>901 N Pitt Str., Suite 170</p>
                  </div>
                  <div className="adress-block">
                    <p>Alexandria, VA 22314, USA</p>
                  </div>
                  <div className="privacy-block">
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="footer-nav">
                  <div className="title">Home</div>
                  <div className="nav">
                    <ul>
                      <a href="#"><li>Work</li></a>
                      <a href="#"><li>Service</li></a>
                      <a href="#"><li>Trusted</li></a>
                      <a href="#"><li>About</li></a>
                      <a href="#"><li>Contact</li></a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="footer-nav">
                  <div className="title">Experts in</div>
                  <div className="nav">
                    <ul>
                      <a href="#"><li>Product</li></a>
                      <a href="#"><li>Wed Development</li></a>
                      <a href="#"><li>Motion Design</li></a>
                      <a href="#"><li>Mob app Development</li></a>
                      <a href="#"><li>Video Production</li></a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-social">
                  <div className="content">
                    <div className="title">Follow us</div>
                    <div className="socials">
                      <a href=""><div className="icon facebook"></div></a>
                      <a href=""><div className="icon instagram"></div></a>
                      <a href=""><div className="icon dribbble"></div></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )

}

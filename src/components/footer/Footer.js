import React from 'react'

import logofooter from '../../assets/images/logo-footer.svg'


export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-md-5 col-lg-5">
            <div className="row">
              <div className="col-xxl-12 col-sm-6 col-6">
                <div className="footer-left">
                  <div className="img-block">
                    <a href="#">
                      <img src={logofooter} className="logo" alt="logo" />
                    </a>
                  </div>
                    <div className="mail-block">
                      <a href="mailto:info@myplanetdesign.com">info@myplanetdesign.com</a>
                    </div>
                  </div>
                </div>
              <div className="col-xxl-0 col-sm-6 col-6">
                  <div className="footer-social-sm">
                    <div className="title">Follow us</div>
                      <div className="socials">
                        <a href=""><div className="icon facebook"></div></a>
                        <a href=""><div className="icon instagram"></div></a>
                        <a href=""><div className="icon instagram"></div></a>
                      </div>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-xxl-6 col-md-7 col-lg-7 col-sm-12 col-12">
            <div className="footer-right">
              <div className="row">
                <div className="col-xxl-4 col-md-4 col-lg-4 col-sm-6 col-6">
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
                <div className="col-xxl-5 col-md-4 col-lg-4 col-sm-6 col-6">
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
                <div className="col-xxl-3 col-md-4 col-lg-4 sm">
                  <div className="footer-social sm">
                    <div className="title">Follow us</div>
                      <div className="socials">
                        <a href=""><div className="icon facebook"></div></a>
                        <a href=""><div className="icon instagram"></div></a>
                        <a href=""><div className="icon instagram"></div></a>
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

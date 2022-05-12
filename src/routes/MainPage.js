import React from 'react'
import Slider from "react-slick";





import Hero from '../assets/images/hero.svg';
import feedback from '../assets/images/feedback.svg';
import feedicon from '../assets/images/feed-icon.svg';

import Project1 from '../assets/images/projects/img-p1.jpg';

import TabOne from '../assets/images/tabs/tabs.png';
import TabOneO from '../assets/images/tabs/Vector.png';

import vt from '../assets/images/trusted/vt.png';
import solve from '../assets/images/trusted/Solve.png';
import fenster from '../assets/images/trusted/fenster.png';
import vapulus from '../assets/images/trusted/vapulus.png';
import biooo from '../assets/images/trusted/biooo.png';
import stardm from '../assets/images/trusted/stardm.jpg';

export default function MainPage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };






  return (

    <main>



      <div className="container">

        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="hero-block">
                <div className="hero-content">
                  <div className="hero-title">
                    <h1>
                      Digital design & software agency that works<span className="yellow">.</span>
                      </h1>
                  </div>
                  <div className="hero-description">
                    <p>We create best solutions for your buisness from design audit to big data platforms.</p>
                  </div>
                  <div className="hero-link">
                    <a href="#" className="hero-a">
                      Scroll down<div className="icon arrow-down"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </div>

        <section className="section video">
          <iframe src="https://www.youtube.com/embed/mnuPj1japoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>

      <div className="container">

        <section className="section project-list">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h1>
                  Our work<span className="yellow">.</span>
                </h1>
              </div>
              <div className="section-description">
                <p>
                  We partner with organizations, activists and optimists.
                  Here’s a handful we’ve already helped.
                </p>
              </div>
              <div className="section-button">
                <a href="">
                  <button className="button">
                    View our projects
                  </button>
                </a>
              </div>
              <div className="row custom-gy-100">
                <div className="project-block">
                  <div className="col-12">
                    <div className="row">
                        <div className="col-xxl-6 col-lg-6 col-md-6 second">
                          <div className="project-content-block">
                            <div className="title-block">
                              <h1>Lorem ipsum</h1>
                            </div>
                            <div className="description-block">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                              </p>
                            </div>
                            <div className="button-block">
                              <a href="">
                                <button className="button with-arrow">
                                  See more
                                  <div className="icon-container">
                                  <div className="icon arrow-right"></div>
                                  </div>
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 first">
                          <div className="project-image-block">
                            <img src={Project1} className="" alt="Project" />
                          </div>
                        </div>
                    </div>
                  </div>   
                </div>
                <div className="project-block">
                  <div className="col-12">
                    <div className="row">
                        <div className="col-xxl-6 col-lg-6 col-md-6">
                          <div className="project-image-block">
                            <img src={Project1} className="" alt="Project" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6">
                          <div className="project-content-block left">
                            <div className="title-block">
                              <h1>Lorem ipsum</h1>
                            </div>
                            <div className="description-block">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                              </p>
                            </div>
                            <div className="button-block">
                              <a href="">
                                <button className="button with-arrow">
                                  See more
                                  <div className="icon-container">
                                  <div className="icon arrow-right"></div>
                                  </div>
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div> 
                </div>
                <div className="project-block">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-lg-6 col-md-6 second">
                        <div className="project-content-block ">
                          <div className="title-block">
                            <h1>Lorem ipsum</h1>
                          </div>
                          <div className="description-block">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                            </p>
                          </div>
                            <div className="button-block">
                              <a href="">
                                <button className="button with-arrow">
                                  See more
                                  <div className="icon-container">
                                  <div className="icon arrow-right"></div>
                                  </div>
                                </button>
                              </a>
                            </div>
                        </div>
                      </div>
                        <div className="col-xxl-6 col-lg-6 col-md-6 first">
                          <div className="project-image-block">
                            <img src={Project1} className="" alt="Project" />
                          </div>
                        </div>
                    </div>
                  </div>   
                </div>
                <div className="project-block">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-xxl-6 col-lg-6 col-md-6">
                          <div className="project-image-block">
                            <img src={Project1} className="" alt="Project" />
                          </div>
                      </div>
                      <div className="col-xxl-6 col-lg-6 col-md-6">
                          <div className="project-content-block left">
                            <div className="title-block">
                              <h1>Lorem ipsum</h1>
                            </div>
                            <div className="description-block">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                              </p>
                            </div>
                            <div className="button-block">
                              <a href="">
                                <button className="button with-arrow">
                                  See more
                                  <div className="icon-container">
                                  <div className="icon arrow-right"></div>
                                  </div>
                                </button>
                              </a>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="trusted-block">
              <div className="col-12">
                <div className="row">
                  <div className="col-xxl-6 col-lg-6 col-md-12">
                    <div className="trusted-content">
                      <div className="section-title">
                        <h1>
                          Trusted by<span className="yellow">.</span>
                        </h1>
                      </div>
                      <div className="section-description">
                        We work globally, locally, and everywhere in between with brands who look to us to create powerful messages that have an impact
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-6 col-md-12">
                    <div className="trusted-blocks">
                      <div className="row">
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 top-left">
                          <div className="content">
                            <img src={stardm} className="" alt="" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 top-center">
                          <div className="content top-center">
                            <img src={vt} className="" alt="" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 top-right">
                          <div className="content">
                            <img src={solve} className="" alt="" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 bottom-left">
                          <div className="content">
                            <img src={fenster} className="" alt="" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 bottom-center">
                          <div className="content">
                            <img src={vapulus} className="" alt="" />
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-4 col-sm-6 col-6 bottom-right">
                          <div className="content">
                            <img src={biooo} className="" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="feedback">
              <div className="col-12">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-0 col-md-0">
                    <div className="feedback-img-block">
                      <img src={feedback} className="" alt="" />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                    <div className="main-title">
                      <h1>
                        How’d we do <span className="yellow">.</span>
                      </h1>
                    </div>
                    <div className="feedback-slider-block">
                      <Slider {...settings}>
                        <div className="slider-block">
                          <div className="slider-content">
                              <div className="section-description">
                                <p> 
                                  <div className="icon dots-up"></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                                </p>
                              </div>
                              <div className="section-feedback">
                                <div className="img-block">
                                  <img src={feedicon} className="" alt="" />
                                </div>
                                <div className="title-and-desc">
                                  <div className="title">
                                    <h3>
                                      Alicia Levey
                                    </h3>
                                  </div>
                                  <div className="desc">
                                    <p>
                                      They don’t just execute, they parter.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="slider-block">
                          <div className="slider-content">
                              <div className="section-description">
                                <p> 
                                  <div className="icon dots-up"></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                                </p>
                              </div>
                              <div className="section-feedback">
                                <div className="img-block">
                                  <img src={feedicon} className="" alt="" />
                                </div>
                                <div className="title-and-desc">
                                  <div className="title">
                                    <h3>
                                      Alicia Levey
                                    </h3>
                                  </div>
                                  <div className="desc">
                                    <p>
                                      They don’t just execute, they parter.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="slider-block">
                          <div className="slider-content">
                              <div className="section-description">
                                <p> 
                                  <div className="icon dots-up"></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod consequat nunc nulla mauris aliquam.  
                                </p>
                              </div>
                              <div className="section-feedback">
                                <div className="img-block">
                                  <img src={feedicon} className="" alt="" />
                                </div>
                                <div className="title-and-desc">
                                  <div className="title">
                                    <h3>
                                      Alicia Levey
                                    </h3>
                                  </div>
                                  <div className="desc">
                                    <p>
                                      They don’t just execute, they parter.
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>

                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

  )
}


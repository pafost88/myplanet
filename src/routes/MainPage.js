import React, { Component } from "react";
import Slider from 'react-slick';
import feedback from '../assets/images/feedback.svg';
import feedicon from '../assets/images/feed-icon.svg';

import Project1 from '../assets/images/projects/img-p1.jpg';

import vt from '../assets/images/trusted/vt.png';
import solve from '../assets/images/trusted/Solve.png';
import fenster from '../assets/images/trusted/fenster.png';
import vapulus from '../assets/images/trusted/vapulus.png';
import biooo from '../assets/images/trusted/biooo.png';
import stardm from '../assets/images/trusted/stardm.jpg';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 2,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sites = {
    dots: false,
    infinite: true,
    speed: 3500,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <main>



      <section className="section hero">
        <div className="col-12">
          <div className="hero-block">
            <div className="hero-content">
              <div className="hero-title">
                <h1>
                  Digital design & software agency that works<span className="yellow">.</span>
                </h1>
              </div>
              <div className="hero-description">
                <p>We create best solutions for your buisness from design audit to big data platforms. </p>
              </div>
              <div className="hero-link">
                <a href="#" className="hero-a">
                  Scroll down
                  <div className="icon arrow-down"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

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
                    View our projects 1
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan.
                              Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod
                              consequat nunc nulla mauris aliquam.
                            </p>
                          </div>
                          <div className="tags-block">
                            <div className="tag">
                              <p>#Sass</p>
                            </div>
                            <div className="tag">
                              <p>#UX/UI</p>
                            </div>
                            <div className="tag">
                              <p>#Branding</p>
                            </div>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan.
                              Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod
                              consequat nunc nulla mauris aliquam.
                            </p>
                          </div>
                          <div className="tags-block">
                            <div className="tag">
                              <p>#Sass</p>
                            </div>
                            <div className="tag">
                              <p>#UX/UI</p>
                            </div>
                            <div className="tag">
                              <p>#Branding</p>
                            </div>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan.
                              Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod
                              consequat nunc nulla mauris aliquam.
                            </p>
                          </div>
                          <div className="tags-block">
                            <div className="tag">
                              <p>#Sass</p>
                            </div>
                            <div className="tag">
                              <p>#UX/UI</p>
                            </div>
                            <div className="tag">
                              <p>#Branding</p>
                            </div>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan.
                              Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur. Vitae diam, euismod
                              consequat nunc nulla mauris aliquam.
                            </p>
                          </div>
                          <div className="tags-block left">
                            <div className="tag">
                              <p>#Sass</p>
                            </div>
                            <div className="tag">
                              <p>#UX/UI</p>
                            </div>
                            <div className="tag">
                              <p>#Branding</p>
                            </div>
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
                  <div className="col-12">
                    <div className="trusted-content">
                      <div className="section-title">
                        <h1>
                          Trusted by<span className="yellow">.</span>
                        </h1>
                      </div>
                      <div className="section-description">
                        <p>Lorem Ipsum</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <Slider {...sites}>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={vt} className="" alt="" />
                      </div>
                    </div>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={solve} className="" alt="" />
                      </div>
                    </div>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={fenster} className="" alt="" />
                      </div>
                    </div>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={vapulus} className="" alt="" />
                      </div>
                    </div>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={biooo} className="" alt="" />
                      </div>
                    </div>
                    <div className="slider-block">
                      <div className="block-img">
                        <img src={stardm} className="" alt="" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="feedback">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="feedback-slider-block">
                  <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="col-12" key={1}>
                      <div className="slider-block">
                        <div className="slider-content">
                          <div className="section-description">
                            <div className="block-icon">
                              <div className="icon dots-up"></div>
                            </div>
                            <div className="block-text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur.
                              </p>
                              <div className="block-link">
                                <a href="">Case Study <div className="icon arrowupright"></div></a>
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
                        </div>
                      </div>
                    </div>

                    <div className="col-12" key={2}>
                      <div className="slider-block">
                        <div className="slider-content">
                          <div className="section-description">
                            <div className="block-icon">
                              <div className="icon dots-up"></div>
                            </div>
                            <div className="block-text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur.
                              </p>
                              <div className="block-link">
                                <a href="">Case Study <div className="icon arrowupright"></div></a>
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
                        </div>
                      </div>
                    </div>

                    <div className="col-12" key={3}>
                      <div className="slider-block">
                        <div className="slider-content">
                          <div className="section-description">
                            <div className="block-icon">
                              <div className="icon dots-up"></div>
                            </div>
                            <div className="block-text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet et est sit accumsan. Eget tincidunt duis enim, nec viverra lacus orci, diam curabitur.
                              </p>
                              <div className="block-link">
                                <a href="">Case Study <div className="icon arrowupright"></div></a>
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
                        </div>
                      </div>
                    </div>
                  </Slider>

                  <div className="slider-button-block">
                    <div className="icon-block" onClick={this.previous}>
                      <div className="icon slideral"></div>
                    </div>
                    <div className="icon-block" onClick={this.next}>
                      <div className="icon sliderar"></div>
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
}


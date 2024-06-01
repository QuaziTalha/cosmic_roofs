import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="main-header style-one">
        <div className="header-lower">
          <div className="header_top">
            <div className="header_top_left">
              <ul className="top_left">
                <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                <li>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <a href="tel:+91-213-666-0027">+91-213-666-0027</a>
                </li>
              </ul>
            </div>
            <div className="header_top_right">
              <div className="header_right_info">
                <ul className="top_right">
                  <li className="login__border">
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <ul className="top_smedia">
                      <li>
                        <a href="index.html">
                          <span className="icon-2" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <span className="icon-1" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <span className="icon-3" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="outer-box">
            <div
              className="logo-box"
              style={{
                backgroundImage: "url(images/shape/shape-01.png)",
              }}
            >
              <figure
                className="logo"
                style={{
                  backgroundImage: "url(images/shape/shape-02.png)",
                }}
              >
                <a href="index.html">
                  <img src="images/logo.png" alt />
                </a>
              </figure>
            </div>
            <div className="menu-area">
              <div className="mobile-nav-toggler">
                <i className="icon-bar" />
                <i className="icon-bar" />
                <i className="icon-bar" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>

                    <li>
                      <a href="/projects">Projects</a>
                    </li>

                    <li>
                      <a href="/contact"> Contact </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="header__right">
              <div className="header__right__button">
                <div className="header-right_buttom">
                  <div className="btns-box">
                    <a className="btn-one" href="index.html">
                      <em>
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </em>
                      <span>Free Estimate</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto_container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix"></nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fas fa-times" />
        </div>
        <nav className="menu-box mCustomScrollbar _mCS_1">
          <div
            id="mCSB_1"
            className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            style={{ maxHeight: 475 }}
            tabIndex={0}
          >
            <div
              id="mCSB_1_container"
              className="mCSB_container"
              style={{ position: "relative", top: "-165px", left: 0 }}
              dir="ltr"
            >
              <div className="nav-logo">
                <a href="index.html">
                  <img
                    src="images/white-logo.png"
                    alt
                    title
                    className="mCS_img_loaded"
                  />
                </a>
              </div>
              <div className="menu-outer">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <a href="index.html">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Three</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Four</a>
                        </li>
                        <li className="dropdown">
                          <a href="index.html">Header Style</a>
                          <ul>
                            <li>
                              <a href="index.html">Header Style 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Style 02</a>
                            </li>
                            <li>
                              <a href="index-3.html">Header Style 03</a>
                            </li>
                            <li>
                              <a href="index-4.html">Header Style 04</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down" />
                          </div>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down" />
                      </div>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="services-single.html">Services Single</a>
                        </li>
                        <li>
                          <a href="services-details.html">Services Details</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down" />
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li className="dropdown">
                          <a href="#">Team</a>
                          <ul>
                            <li>
                              <a href="team-1.html">Team 1</a>
                            </li>
                            <li>
                              <a href="team-2.html">Team 2</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down" />
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="#">Testimonial</a>
                          <ul>
                            <li>
                              <a href="testimonial-1.html">Testimonial 1</a>
                            </li>
                            <li>
                              <a href="testimonial-2.html">Testimonial 2</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down" />
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="#">Project</a>
                          <ul>
                            <li>
                              <a href="project-1.html">Project 1</a>
                            </li>
                            <li>
                              <a href="project-2.html">Project 2</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down" />
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down" />
                          </div>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="error.html">Error</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down" />
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down" />
                      </div>
                    </li>
                    <li>
                      <a href="contact.html"> Contact </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li>Chicago 12, Melborne City, USA</li>
                  <li>
                    <a href="tel:+8801682648101">+88 01682648101</a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="clearfix">
                  <li>
                    <a href="index.html">
                      <span className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
              style={{ display: "block" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: 0,
                    height: 0,
                    top: 0,
                    display: "block",
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <div className="mCSB_dragger_bar" style={{ lineHeight: 0 }} />
                </div>
                <div className="mCSB_draggerRail" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="main__footer p_relative">
        <div className="main__footer__top">
          <div className="footer__top p_relative d_block">
            <div className="auto_container">
              <div className="footer__top__content">
                <div className="footer__top__left">
                  <div className="logo-widget">
                    <figure className="footer-logo">
                      <a href="index.html">
                        <img src="images/footer-logo.png" alt />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="footer__top__right">
                  <div className="footer__social__media">
                    <ul>
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
                          <span className="icon-23" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <span className="icon-3" />
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <span className="icon-24" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__middle p_relative d_block">
            <div className="auto_container">
              <div className="footer__middle__content">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 footer_column">
                    <div className="footer_widget left">
                      <div className="widget_title">
                        <h4>About Us</h4>
                      </div>
                      <div className="widget_content">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Eveniet voluptas magnam expedita, alias porro
                          aut officiis, perferendis reiciendis minus doloremque
                          obcaecati, mollitia placeat dolores natus nesciunt.
                          Laudantium, dignissimos. Quae, quod.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                    <div className="footer_widget left">
                      <div className="widget_title">
                        <h4>Get In Touch</h4>
                      </div>
                      <div className="widget_content">
                        <ul className="links_list clearfix">
                          <li>
                            Tincidunt neque pretium lectus <br />
                            donec risus.
                          </li>
                          <li>
                            <span>Add:</span> New Hyde Park, NY 11040
                          </li>
                          <li>
                            <span>Email:</span>
                            <a href="mailto:example@gmail.com">
                              example@gmail.com
                            </a>
                          </li>
                          <li>
                            <span>Phone:</span>
                            <a href="tel:3336660000"> 333 666 0000</a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget_media">
                        <ul>
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
                              <span className="icon-23" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-12 footer_column">
                    <div className="footer_widget links_widget ml_100">
                      <div className="widget_title">
                        <h4>Links</h4>
                      </div>
                      <div className="widget_content">
                        <ul className="links_list clearfix">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="index.html">Case</a>
                          </li>
                          <li>
                            <a href="index.html">Roof Repair</a>
                          </li>
                          <li>
                            <a href="index.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom p_relative">
          <div className="auto_container">
            <div className="bottom_inner p_relative">
              <div className="copyright">
                <p>
                  Copyright 2022 by <a href="index.html">Roofer</a> theme All
                  Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

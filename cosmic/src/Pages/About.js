import React from "react";

export default function About() {
  return (
    <div>
      <section className="page__title p_relative">
        <div
          className="bg-layer parallax-bg"
          data-parallax='{"y": 20}'
          style={{
            transform:
              "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            WebkitTransform:
              "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
            backgroundImage: "url(images/resource/page-title.png)",
          }}
        />
        <div className="auto_container text-center">
          <div className="content-box p_relative">
            <h1 className="title">About Us</h1>
            <ul className="bread-crumb">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li>
                <span> -</span>About
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about__section__three see__pad">
        <div className="about__three">
          <div className="auto_container">
            <div className="row">
              <div className="col-lg-6 col-md-12 pe-lg-5">
                <div className="about__three__left">
                  <div className="title">
                    <div className="sub__title">
                      <h6>About Rooftox</h6>
                    </div>
                    <div className="main__title">
                      <h2>
                        Experienced &amp; <br />
                        Quality More Than <br />
                        30 Years
                      </h2>
                    </div>
                  </div>
                  <div className="normal__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Adipiscing integer ultrices suspendisse varius etiam est.
                      Est, felis, tempus nec vitae orci sodales Metus, velit nec
                      at diam in sed. Massa dui ipsum ornare sagittis dolor
                      sagittis amet odio est. Sit semper et velit fusce.
                    </p>
                  </div>
                  <div className="engineer__section">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <div className="engineer__content">
                          <div className="engineer__content__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div className="engineer__content">
                          <div className="engineer__content__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Certified Company
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about__btn">
                      <a className="btn-one" href="about.html">
                        <em>
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </em>
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 p_relative ps-lg-5">
                <div className="about__three__right">
                  <div className="anim-icon">
                    <div
                      className="parallax-scene parallax-scene-7"
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        data-depth="0.30"
                        className="icon layer-bg"
                        style={{
                          backgroundImage: 'url("images/icons/icon-02.svg")',
                          transform: "translate3d(14.5px, -18.5px, 0px)",
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                          position: "relative",
                          display: "block",
                          left: 0,
                          top: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div className="one__img">
                    <div className="inner_box">
                      <div className="image_box">
                        <figure
                          className="image wow zoomIn animated animated"
                          data-wow-delay="00ms"
                          data-wow-duration="1500ms"
                          style={{
                            visibility: "visible",
                            animationDuration: "1500ms",
                            animationDelay: "0ms",
                            animationName: "zoomIn",
                          }}
                        >
                          <img src="images/resource/about-three-01.png" alt />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="two__img p_absolute">
                    <img src="images/resource/about-three-02.png" alt />
                  </div>
                  <div
                    className="about__two__expericence"
                    style={{
                      backgroundImage: "url(images/shape/shape-42.png)",
                    }}
                  >
                    <div className="about__two__text">
                      <h2>20 </h2>
                      <span>Years of Expericence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="history__section p_relative see__pad">
        <div className="history__tab">
          <div className="auto_container">
            <div className="title text-center">
              <div className="sub__title">
                <h6>History</h6>
              </div>
              <div className="main__title">
                <h2> Roofing Service History </h2>
              </div>
            </div>
            <div className="hisyory__tab__section">
              <div className="tabs-box">
                <div className="tab-btn-box p_relative">
                  <ul className="tab-btns tab-buttons clearfix">
                    <li className="tab-btn active-btn" data-tab="#tab-1">
                      <span className="tab___btn"> 1998 </span>
                    </li>
                    <li className="tab-btn" data-tab="#tab-2">
                      <span className="tab___btn"> 2005</span>
                    </li>
                    <li className="tab-btn" data-tab="#tab-3">
                      <span className="tab___btn"> 2010 </span>
                    </li>
                    <li className="tab-btn" data-tab="#tab-4">
                      <span className="tab___btn"> 2015 </span>
                    </li>
                    <li className="tab-btn" data-tab="#tab-5">
                      <span className="tab___btn"> 2020 </span>
                    </li>
                    <li className="tab-btn" data-tab="#tab-6">
                      <span className="tab___btn"> 2022 </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="tabs-content wow fadeInUp animated animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="tab  active-tab" id="tab-1">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-01.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 ps-xl-4">
                        <div className="tab__right__content">
                          <h4>Roofing Layer</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-2">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-02.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 px-xl-4">
                        <div className="tab__right__content">
                          <h4>Damage Repair</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-3">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-03.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 ps-xl-4">
                        <div className="tab__right__content">
                          <h4>Roof Cornering</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-4">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-01.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 ps-xl-4">
                        <div className="tab__right__content">
                          <h4>Siding Install</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-5">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-04.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 ps-xl-4">
                        <div className="tab__right__content">
                          <h4>Opening Year of History</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab" id="tab-6">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 pe-xl-4">
                        <div className="tab__left__content">
                          <figure className="image">
                            <img src="images/resource/service-05.png" alt />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 ps-xl-4">
                        <div className="tab__right__content">
                          <h4>Opening Year of RoofTox</h4>
                          <div className="tab__text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Adipiscing integer ultrices suspendisse
                              varius etiam est. Est, felis, tempus nec vitae
                              orci sodales Metus, velit nec at diam in sed.
                              Massa dui ipsum ornare sagittis dolor sagittis
                              amet odio est. Sit semper et velit fusce.
                            </p>
                          </div>
                          <div className="tab__list">
                            <ul>
                              <li>
                                <span className="icon-21" /> Innovative Work
                                Experience{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> 100% Satisfaction
                                Guarantee{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Quality Expert
                                Engineer{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Certified Company{" "}
                              </li>
                              <li>
                                <span className="icon-21" /> Roof Renovation{" "}
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
          </div>
        </div>
      </section>
      <section className="funfact__section three p_relative ">
        <div className="funfact__content">
          <div className="auto_container">
            <div className="row">
              <div
                className=" col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "zoomIn",
                }}
              >
                <div className="inner_box">
                  <div className="icon__image">
                    <span className="icon-8" />
                  </div>
                  <div className="funfact__text">
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={932}
                      >
                        932
                      </span>
                      <span>+</span>
                    </div>
                    <p>Project Complete</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated animated"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "100ms",
                  animationName: "zoomIn",
                }}
              >
                <div className="inner_box">
                  <div className="icon__image">
                    <span className="icon-7" />
                  </div>
                  <div className="funfact__text">
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={90}
                      >
                        90
                      </span>
                      <span>+</span>
                    </div>
                    <p>Experience Staff</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "200ms",
                  animationName: "zoomIn",
                }}
              >
                <div className="inner_box">
                  <div className="icon__image">
                    <span className="icon-9" />
                  </div>
                  <div className="funfact__text">
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={20}
                      >
                        20
                      </span>
                      {"{"}" "{"}"}
                      <span>+</span>
                    </div>
                    <p>Awards Win</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3  col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "300ms",
                  animationName: "zoomIn",
                }}
              >
                <div className="inner_box">
                  <div className="icon__image">
                    <span className="icon-10" />
                  </div>
                  <div className="funfact__text">
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
                        data-speed={1500}
                        data-stop={620}
                      >
                        620
                      </span>
                      {"{"}" "{"}"}
                      <span>+</span>
                    </div>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose__two see__pad p_relative">
        <div className="choose__two__content">
          <div className="anim-icon">
            <div
              className="icon icons-01"
              style={{
                backgroundImage: "url(images/shape/shape-36.png)",
              }}
            />
            <div
              className="icon icons-02"
              style={{
                backgroundImage: "url(images/shape/shape-37.png)",
              }}
            />
          </div>
          <div className="auto_container">
            <div className="row">
              <div className="col-lg-6 col-md-12 pe-lg-5">
                <div className="choose__two__left">
                  <div className="title">
                    <div className="sub__title">
                      <h6>Why Choose Rooftox</h6>
                    </div>
                    <div className="main__title">
                      <h2>
                        Why Choose RoofTox <br /> For Roofing
                      </h2>
                    </div>
                  </div>
                  <div className="roofer__two__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Adipiscing integer ultrices suspendisse varius etiam est.
                      Est, felis, tempus nec vitae orci sodales Metus, velit nec
                      at diam in sed. Massa dui ipsum ornare sagittis dolor
                      sagittis amet odio est. Sit semper et velit fusce.
                    </p>
                  </div>
                  <div className="roofer__list__content">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <div className="roofer__two__list">
                          <ul>
                            <li>
                              <span className="icon-41" /> Expert Engineers
                            </li>
                            <li>
                              <span className="icon-41" /> Award Wining Company
                            </li>
                            <li>
                              <span className="icon-41" /> Required Works
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div className="roofer__two__list">
                          <ul>
                            <li>
                              <span className="icon-41" /> Quality Materials
                            </li>
                            <li>
                              <span className="icon-41" /> Fully insured
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="choose__two__right wow zoomIn animated animated"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "100ms",
                    animationName: "zoomIn",
                  }}
                >
                  <figure className="image">
                    <img src="images/resource/choose-two.png" alt />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_letter">
        <div className="auto_container">
          <div className="news_letter_content">
            <div className="row">
              <div className="col-lg-6">
                <div className="news_letter_left p_relative">
                  <h3>Our Newsletters</h3>
                  <div className="form-inner p_relative">
                    <form
                      action="index.html"
                      method="post"
                      className="subscribe-form"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                        />
                        <button type="submit" className="btn-two">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-xl-0">
                <div className="news_letter_right p_relative">
                  <div
                    className="image_layer shape_01"
                    style={{
                      backgroundImage: "url(images/shape/shape-03.png)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="news_letter_image">
                    <figure className="image">
                      <img src="images/resource/news-letter.png" alt />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Projects() {
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
        ></div>
        <div className="auto_container text-center">
          <div className="content-box p_relative">
            <h1 className="title">Project Style 2</h1>
            <ul className="bread-crumb">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li>
                <span> -</span>Project Style 2{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="portfolio style__one two see__pad p_relative ">
        <div className="auto_container">
          <div className="sortable-masonry">
            <div className="filters">
              <ul className="filter-tabs filter-btns clearfix">
                <li
                  className="active filter"
                  data-role="button"
                  data-filter=".all"
                >
                  All Works
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".business"
                >
                  Business
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".corporate"
                >
                  Corporate
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".marketing"
                >
                  Marketing
                </li>
              </ul>
            </div>
            <div
              className="items-container row"
              style={{ position: "relative", height: 1016 }}
            >
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all corporate"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-01.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-01.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all business marketing corporate"
                style={{ position: "absolute", left: 430, top: 0 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-02.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-02.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all marketing business"
                style={{ position: "absolute", left: 860, top: 0 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-03.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-03.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all corporate"
                style={{ position: "absolute", left: 0, top: 508 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-04.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-04.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all business marketing"
                style={{ position: "absolute", left: 430, top: 508 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-05.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-05.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 masonry-item small-column all marketing business"
                style={{ position: "absolute", left: 860, top: 508 }}
              >
                <div className="portfolio__block__one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/resource/portfolio-06.png" alt />
                    </figure>
                    <div className="lower__content">
                      <div className="view-btn">
                        <a
                          href="images/resource/portfolio-big-06.png"
                          className="lightbox-image"
                          data-fancybox="gallery"
                        >
                          <span className="icon-18" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__block">
                    <span>Maintenance</span>
                    <h4>
                      <a href="project-details.html">Quality Materials</a>
                    </h4>
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

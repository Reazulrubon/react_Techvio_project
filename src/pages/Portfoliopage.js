import React from "react";
import NavbarTop from "../component/Main/NavbarTop";
import Footer_subscribe_section from "../component/home_component/Footer_subscribe_section";
import Copyright_area from "../component/home_component/Copyright_area";

export default function Portfoliopage() {
  return (
    <>
      {/* Start Navbar Section */}
      <NavbarTop />
      {/* End Navbar Section */}
      {/* Start Page Title Section */}
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Portfolio</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Section */}
      {/* Start Portfolio Section */}
      <section className="portfolio-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Recent Works</h6>
                <h2>Our Portfolio</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio-list">
                <ul className="nav" id="portfolio-flters">
                  <li className="filter filter-active" data-filter=".all">
                    all
                  </li>
                  <li className="filter" data-filter=".branding">
                    branding
                  </li>
                  <li className="filter" data-filter=".application">
                    application
                  </li>
                  <li className="filter" data-filter=".webdesign">
                    web design
                  </li>
                  <li className="filter" data-filter=".photography">
                    photography
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="portfolio-container">
            <div className="row">
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all branding">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all photography">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-2.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all branding webdesign">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-3.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all webdesign">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-4.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all application">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-5.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio-item */}
              <div className="col-lg-4 col-md-6 portfolio-grid-item all application photography">
                <div className="portfolio-item">
                  <img src="assets/img/portfolio/portfolio-6.jpg" alt="image" />
                  <div className="portfolio-content-overlay">
                    <p>App Store | Social Media</p>
                    <h3>
                      <a href="single-portfolio.html">Creative Web Design</a>
                    </h3>
                    <a
                      className="portfolio-link-icon"
                      href="single-portfolio.html"
                    >
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
      {/* Start Footer & Subscribe Section */}
      <Footer_subscribe_section />
      {/* End Footer & Subscribe Section */}
      {/* Start Copy Right Section */}
      <Copyright_area />
    </>
  );
}

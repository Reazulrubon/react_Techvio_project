import React from "react";
import NavbarTop from "../component/Main/NavbarTop";
import Hire_section from "../component/home_component/Hire_section";
import Footer_subscribe_section from "../component/home_component/Footer_subscribe_section";
import Copyright_area from "../component/home_component/Copyright_area";

export default function Servicepage() {
  return (
    <>
      {/* Start Navbar Section */}
      <NavbarTop />
      {/* End Navbar Section */}
      {/* Start Page Title Section */}
      <div className="page-title-area item-bg2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Services</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Section */}
      {/* Start Services Section */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-development" />
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-targeted-marketing" />
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-analytics" />
                </div>
                <h3>Startup Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-super-intelligence" />
                </div>
                <h3>Networking Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-code" />
                </div>
                <h3>SEO Optimization</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="services-icon">
                  <i className="flaticon-mobile-app" />
                </div>
                <h3>Apps Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore magna aliqua
                </p>
                <div className="services-btn">
                  <a href="#" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* Start Hire Section */}
      <Hire_section />
      {/* End Hire Section */}
      {/* Start Overview Section */}
      <section className="overview-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="overview-image">
                <img src="assets/img/choose-1.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overview-content">
                <h6 className="sub-title">Why Choose Us?</h6>
                <h2>
                  Safeguard Your Brand with Cyber Security and IT Solutions
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="features-list">
                  <li>
                    {" "}
                    <span>Remote IT Assistance</span>
                  </li>
                  <li>
                    {" "}
                    <span>Cloud Services</span>
                  </li>
                  <li>
                    {" "}
                    <span>Managed IT Service</span>
                  </li>
                  <li>
                    {" "}
                    <span>IT Security Services</span>
                  </li>
                  <li>
                    {" "}
                    <span>Practice IT Management</span>
                  </li>
                  <li>
                    {" "}
                    <span>Solving IT Problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Overview Section */}
      {/* Start Overview Section */}
      <section className="overview-section pt-50 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="overview-content">
                <h6 className="sub-title">WHY TRUST US?</h6>
                <h2>
                  Achieve Digital Transformation For Your Retail Business
                  Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="features-list">
                  <li>
                    {" "}
                    <span>Protect your Business</span>
                  </li>
                  <li>
                    {" "}
                    <span>Network Security</span>
                  </li>
                  <li>
                    {" "}
                    <span>Data Security</span>
                  </li>
                  <li>
                    {" "}
                    <span>Small Business Owners</span>
                  </li>
                  <li>
                    {" "}
                    <span>Running your Business</span>
                  </li>
                  <li>
                    {" "}
                    <span>Network Monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overview-image-2">
                <img src="assets/img/choose-2.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Overview Section */}
      {/* Start Footer & Subscribe Section */}
      <Footer_subscribe_section />
      {/* End Footer & Subscribe Section */}
      {/* Start Copy Right Section */}
      <Copyright_area />
    </>
  );
}

import React from 'react'
import NavbarTop from '../component/Main/NavbarTop'
import About_section from '../component/home_component/About_section'
import Counter_section from '../component/home_component/Counter_section'
import Team_section from '../component/home_component/Team_section'
import Hire_section from '../component/home_component/Hire_section'
import Footer_subscribe_section from '../component/home_component/Footer_subscribe_section'
import Copyright_area from '../component/home_component/Copyright_area'

export default function Aboutpage() {
  return (
    <>
    
    
    <>
  {/* Start Navbar Section */}
<NavbarTop/>
  {/* End Navbar Section */}
  {/* Start Page Title Section */}
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="page-title-content">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Title Section */}
  
  {/* Start Feature Section */}
  <section className="feature-section pt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-item">
            <img src="assets/img/icon/feature-icon-1.svg" alt="icon" />
            <h3>Flexibility &amp; Responsive</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam
            </p>
            <div className="feature-btn-box">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-item">
            <img src="assets/img/icon/feature-icon-2.svg" alt="icon" />
            <h3>Dedicated Teams</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam
            </p>
            <div className="feature-btn-box">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-item">
            <img src="assets/img/icon/feature-icon-3.svg" alt="icon" />
            <h3>Focusing on Business</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam
            </p>
            <div className="feature-btn-box">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Feature Section */}
  {/* Start About Section */}
  <About_section/>
  {/* End About Section */}
  {/* Start Counter Section */}
  <Counter_section/>
  {/* End Counter Section */}
  {/* Start Team Section */}
  <Team_section/>
  {/* End Team Section */}
  {/* Start Works Process Section */}
  <section className="workprocess-section bg-grey section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h6 className="sub-title">4 Step Work Process</h6>
            <h2>Working Process</h2>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="workprocess-single-item">
            <div className="workprocess-icon-box">
              <img src="assets/img/icon/workprocess-icon-1.svg" alt="icon" />
            </div>
            <div className="workprocess-info">
              <h3>Discover</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
            <div className="workprocess-number-bg">
              <span>01</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="workprocess-single-item">
            <div className="workprocess-icon-box">
              <img src="assets/img/icon/workprocess-icon-2.svg" alt="icon" />
            </div>
            <div className="workprocess-info">
              <h3>Design &amp; Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
            <div className="workprocess-number-bg">
              <span>02</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="workprocess-single-item">
            <div className="workprocess-icon-box">
              <img src="assets/img/icon/workprocess-icon-3.svg" alt="icon" />
            </div>
            <div className="workprocess-info">
              <h3>Install &amp; Testing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
            <div className="workprocess-number-bg">
              <span>03</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="workprocess-single-item">
            <div className="workprocess-icon-box">
              <img src="assets/img/icon/workprocess-icon-4.svg" alt="icon" />
            </div>
            <div className="workprocess-info">
              <h3>Project Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
            <div className="workprocess-number-bg">
              <span>04</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Works Process Section */}
  {/* Start Hire Section */}
  <Hire_section/>
  {/* End Hire Section */}
  {/* Start Partner section */}
  <section className="partner-section pt-100 pb-70">
    <div className="container">
      <div className="partner-title">
        <h6 className="sub-title">Trusted By Over 1500</h6>
        <h2>Our Customers</h2>
      </div>
      <div className="partner-list">
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-1.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-2.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-3.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-4.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-5.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-6.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-7.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-8.png" alt="image" />
          </a>
        </div>
        <div className="partner-item">
          <a href="#0">
            <img src="assets/img/partner/client-1.png" alt="image" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* End Partner section */}
  {/* Start Footer & Subscribe Section */}
  <Footer_subscribe_section/>
  {/* End Footer & Subscribe Section */}
  {/* Start Copy Right Section */}
  <Copyright_area/>
</>

    




    
    
    </>
  )
}

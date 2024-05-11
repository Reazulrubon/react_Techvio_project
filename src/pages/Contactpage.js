import React from 'react'
import NavbarTop from '../component/Main/NavbarTop'
import Footer_subscribe_section from '../component/home_component/Footer_subscribe_section'
import Copyright_area from '../component/home_component/Copyright_area'

export default function Contactpage() {
  return (
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
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Page Title Section */}
  {/* Start Contact Section */}
  <div className="contact-section section-padding">
    <div className="container">
      <div className="section-title">
        <h6 className="sub-title">Let's Talk</h6>
        <h2>Contact Us</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-10 offset-lg-1">
          <div className="contact-form">
            <p className="form-message" />
            <form
              id="contact-form"
              className="contact-form form"
              action="https://cutesolution.com/html/techvio/phpmails.php"
              method="POST"
            >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required=""
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required=""
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required=""
                      className="form-control"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      required=""
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={6}
                      required=""
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn submit-btn">
                    Send Message <span />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Contact Section */}
  {/* Start Contact Info Section */}
  <section className="contact-info-wrapper bg-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h6 className="sub-title">Find Us</h6>
            <h2>Contact Info</h2>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-content">
            <h5>USA Headquarter</h5>
            <p>
              304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B
              Overlook Drive Chester, PA 19013, Flemingsburg USA.
            </p>
            <a href="tel:12345678">080 707 555-321</a>
            <a href="mailto:demo@example.com">demo@example.com</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-content">
            <h5>New York Office</h5>
            <p>
              1540 Pecks Ridge Tilton Rd Flemingsburg, Kentucky(KY), 4104188
              Fulton Street Blackwood, NJ 08012, London.
            </p>
            <a href="tel:12345678">080 707 555-321</a>
            <a href="mailto:demo@example.com">demo@example.com</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-content">
            <h5>Panama Office</h5>
            <p>
              103 Richard Ave Ashville, Ohio, Water Mill,3468 16th Hwy Pangburn,
              Arkansas(AR), Charolais Ashville, Virginia, Panama.
            </p>
            <a href="tel:12345678">080 707 555-321</a>
            <a href="mailto:demo@example.com">demo@example.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Info Section */}
  {/* Start Map Section */}
  <div className="map-section">
    <div className="google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12266.40052111983!2d-101.81182472968649!3d39.771085537389176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877496a0a13c3aa3%3A0xde429e634a338207!2sSt%20Francis%2C%20KS%2067756%2C%20USA!5e0!3m2!1sen!2sbd!4v1704166309039!5m2!1sen!2sbd" />
    </div>
  </div>
  {/* End Map Section */}
  {/* Start Footer & Subscribe Section */}
    <Footer_subscribe_section/>
  {/* End Footer & Subscribe Section */}
  {/* Start Copy Right Section */}
    <Copyright_area/>
</>

  )
}

import React from 'react'

export default function Footer_subscribe_section() {
  return (
    <>
  
  <section className="footer-subscribe-wrapper">
    {/* Start Subscribe Section */}
    <div className="subscribe-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="subscribe-content">
              <h2>Sign Up Our Newsletter</h2>
              <p>
                We Offer An Informative Monthly Technology Newsletter - Check It
                Out.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                name="email"
                placeholder="Enter Your Email"
                required=""
                autoComplete="off"
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* End Subscribe Section */}
    {/* Start Footer Section */}
    <div className="footer-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <a className="footer-logo" href="#">
                <img
                  src="assets/img/logo.png"
                  className="white-logo"
                  alt="logo"
                />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                consectetur laboris.
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-heading">
                <h3>Our Services</h3>
              </div>
              <ul className="footer-quick-links">
                <li>
                  <a href="#">Startup Solutions</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Networking Services</a>
                </li>
                <li>
                  <a href="#">SEO Optimization</a>
                </li>
                <li>
                  <a href="#">Apps Development</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-heading">
                <h3>Useful Links</h3>
              </div>
              <ul className="footer-quick-links">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="portfolio.html">Case Study</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms-condition.html">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-heading">
                <h3>Contact Info</h3>
              </div>
              <div className="footer-info-contact">
                <i className="flaticon-phone-call" />
                <h3>Phone</h3>
                <span>
                  <a href="tel:12345678">01533969005</a>
                </span>
              </div>
              <div className="footer-info-contact">
                <i className="flaticon-envelope" />
                <h3>Email</h3>
                <span>
                  <a href="mailto:demo@example.com">demo@example.com</a>
                </span>
              </div>
              <div className="footer-info-contact">
                <i className="flaticon-placeholder" />
                <h3>Address</h3>
                <span>Dhaka College,North Hall,1205,Dhaka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Section */}
  </section>
  
  
  </>
  )
}

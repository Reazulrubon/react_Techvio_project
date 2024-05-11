import React from 'react'

export default function Banner() {
  return (
    <>
    

    <div className="home-section">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <ul className="social-icon-list">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
                <h1>IT Solutions &amp; Business Services Company</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor magna aliqua, magna aliqua. ipsum is simply
                  dummy text of the printing.
                </p>
                <div className="banner-btn">
                  <a className="default-btn-one" href="services.html">
                    Our Service <span />
                  </a>
                  <a className="default-btn-two" href="contact.html">
                    Contact Us <span />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12" data-tilt="">
              <div className="banner-image">
                <img src="assets/img/home-font.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="creative-shape">
      <img src="assets/img/home-bottom-shape.png" alt="svg shape" />
    </div>
  </div>
    
    </>
  )
}

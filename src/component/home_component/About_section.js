import React from 'react'

export default function About_section() {
  return (
    
    <>
    
    
    <section className="about-area bg-grey section-padding">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <h6 className="sub-title">About Our Company</h6>
            <h2>
              Providing Your Business With A Quality IT Service is Our Passion
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim
            </p>
            <div className="skills">
              <div className="skill-item">
                <h6>
                  IT Consulting <em>90%</em>
                </h6>
                <div className="skill-progress">
                  <div className="progres" data-value="90%" />
                </div>
              </div>
              <div className="skill-item">
                <h6>
                  Cloud Solutions <em>75%</em>
                </h6>
                <div className="skill-progress">
                  <div className="progres" data-value="75%" />
                </div>
              </div>
              <div className="skill-item">
                <h6>
                  Managed IT Service <em>85%</em>
                </h6>
                <div className="skill-progress">
                  <div className="progres" data-value="85%" />
                </div>
              </div>
            </div>
            <div className="about-btn-box">
              <a className="default-btn" href="about.html">
                Learn More <span />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="assets/img/about.jpg" alt="About image" />
            <div className="years-design">
              <h2>23</h2>
              <h5>Years Of Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    </>
  )
}

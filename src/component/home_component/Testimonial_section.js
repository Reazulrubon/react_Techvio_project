import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Testimonial_section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <section className="testimonial-section pt-100 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h6 className="sub-title">Our Testimonial</h6>
              <h2>Client Feedback</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="testimonial-slider">
              <div className="slider-container">
                <Slider {...settings}>
                  
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="assets/img/client/testimonial-1.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Saabir al-Obeid</h3>
                        <span>Turkey</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="assets/img/client/testimonial-2.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Zahra Burnett</h3>
                        <span>United States</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="single-testimonial">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                    <div className="avatar">
                      <img
                        src="assets/img/client/testimonial-3.jpg"
                        alt="testimonial images"
                      />
                    </div>
                    <div className="testimonial-bio">
                      <div className="bio-info">
                        <h3>Stevie Wills</h3>
                        <span>Germany</span>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

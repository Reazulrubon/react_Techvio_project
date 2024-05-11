import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function Services_section() {
  const [data,setdata] =useState([])
  useEffect(()=>{
    axios.get("http://localhost/REACT/aa/backend/service/listService.php")
    .then((res)=> setdata(res.data))
  },[])

  return (
    <>
    
    
    <section className="services-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h6 className="sub-title">What We Provide</h6>
            <h2>Our Services</h2>
          </div>
        </div>
        {data.map((d,i)=>{
          return(

          
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="single-services-item">
            <div className="services-icon">
              {/* <i className="flaticon-development" /> */}
              <img src={`http://localhost/REACT/aa/backend/image/${d.photo}`} alt={d.title}/>
            </div>
            <h3>{d.title}</h3>
            <p>
              {d.content}
            </p>
            <div className="services-btn">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> {d.btn}
              </a>
            </div>
          </div>
        </div>
        )
      })}

        {/* <div className="col-lg-4 col-md-6">
          <div className="single-services-item">
            <div className="services-icon">
              <i className="flaticon-targeted-marketing" />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua
            </p>
            <div className="services-btn">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> Read More
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6">
          <div className="single-services-item">
            <div className="services-icon">
              <i className="flaticon-analytics" />
            </div>
            <h3>Startup Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua
            </p>
            <div className="services-btn">
              <a href="#" className="read-more">
                <i className="bi bi-arrow-right-short" /> Read More
              </a>
            </div>
          </div>
        </div> */
        }
      </div>
    </div>
  </section>
    
    
    </>
  )
}

import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function Blog_section() {
  const [data,setdata] =useState([])
  useEffect(()=>{
    axios.get("http://localhost/REACT/react_palovit_project/backend/blog/listBlog.php")
    .then((res)=> setdata(res.data))
  },[])
  return (
   <>
   
   
   
   <section className="blog-section bg-grey pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h6 className="sub-title">Blog &amp; Article</h6>
            <h2>Recent Blogx</h2>
          </div>
        </div>
        {data.map((d,i)=>{
          return(
        
        <div className="col-lg-4 col-md-6">
          <div className="blog-single-item">
            <div className="blog-image">
              <a href="single-blog.html">
              <img src={`http://localhost/REACT/react_palovit_project/backend/image/${d.photo}`} alt={d.title}/>
              </a>
            </div>
            <div className="blog-description">
              <ul className="blog-info">
                <li>
                  <a href="#">
                    <i className="bi bi-person-circle" /> Author
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-calendar-check" /> 17 June 2024
                  </a>
                </li>
              </ul>
              <div className="blog-text">
                <h3>
                  <a href="single-blog.html">
                  {d.title}
                  </a>
                </h3>
                <p>
                {d.content}
                </p>
                <div className="blog-btn">
                  {" "}
                  <a href="single-blog.html" className="read-more">
                    <i className="bi bi-arrow-right-short" />   {d.btn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        })}
        
        {/* <div className="col-lg-4 col-md-6">
          <div className="blog-single-item">
            <div className="blog-image">
              <a href="single-blog.html">
                <img src="assets/img/blog/blog-2.jpg" alt="image" />
              </a>
            </div>
            <div className="blog-description">
              <ul className="blog-info">
                <li>
                  <a href="#">
                    <i className="bi bi-person-circle" /> Author
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-calendar-check" /> 20 June 2024
                  </a>
                </li>
              </ul>
              <div className="blog-text">
                <h3>
                  <a href="single-blog.html">
                    Announcing Our New Smiles for Success Charity
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed
                  eiusmod tempor incididunt ut labore dolore magna aliqua
                </p>
                <div className="blog-btn">
                  <a href="single-blog.html" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-single-item">
            <div className="blog-image">
              <a href="single-blog.html">
                <img src="assets/img/blog/blog-3.jpg" alt="image" />
              </a>
            </div>
            <div className="blog-description">
              <ul className="blog-info">
                <li>
                  <a href="#">
                    <i className="bi bi-person-circle" /> Author
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-calendar-check" /> 25 June 2024
                  </a>
                </li>
              </ul>
              <div className="blog-text">
                <h3>
                  <a href="single-blog.html">
                    Machine Learning Applications for Every Industry
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed
                  eiusmod tempor incididunt ut labore dolore magna aliqua
                </p>
                <div className="blog-btn">
                  <a href="single-blog.html" className="read-more">
                    <i className="bi bi-arrow-right-short" /> Read More
                  </a>
                </div>
              </div>
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

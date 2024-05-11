import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function Team_section() {
  const [data,setdata] =useState([])
  useEffect(()=>{
    axios.get("http://localhost/REACT/aa/backend/team/listTeam.php")
    .then((res)=> setdata(res.data))
  },[])
  return (
    <>
  
  <section className="team-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h6 className="sub-title">Team Member</h6>
            <h2>Expert Team</h2>
          </div>
        </div>
        {data.map((d,i)=>{
          return(

        
        <div className="col-lg-3 col-md-6" key={i} >
          <div className="single-team-box">
            <div className="team-image">
            <img src={`http://localhost/REACT/aa/backend/image/${d.photo}`} alt={d.title}/>
              <div className="team-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="team-info">
              <h3>{d.title}</h3>
              <span>{d.department}</span>
            </div>
          </div>
        </div>

)
})}

        {/* <div className="col-lg-3 col-md-6">
          <div className="single-team-box">
            <div className="team-image">
              <img src="assets/img/team/team-2.jpg" alt="team" />
              <div className="team-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="team-info">
              <h3>Kevin Haley</h3>
              <span>Co-Founder, CTO</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-team-box">
            <div className="team-image">
              <img src="assets/img/team/team-3.jpg" alt="team" />
              <div className="team-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="team-info">
              <h3>Alishia Fulton</h3>
              <span>Chief Creative Officer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-team-box">
            <div className="team-image">
              <img src="assets/img/team/team-4.jpg" alt="team" />
              <div className="team-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="team-info">
              <h3>Lucas Martinez</h3>
              <span>Creative Director</span>
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

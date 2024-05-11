import React from "react";
import NavbarTop from "../component/Main/NavbarTop"
import Home_preloder from "../component/home_component/Home_preloder";
import Banner from "../component/home_component/Banner";
import Services_section from "../component/home_component/Services_section";
import About_section from "../component/home_component/About_section";
import Overview_section from "../component/home_component/Overview_section";
import Overview_section_2nd from "../component/home_component/Overview_section_2nd";
import Portfolio_section from "../component/home_component/Portfolio_section";
import Counter_section from "../component/home_component/Counter_section";
import Testimonial_section from "../component/home_component/Testimonial_section";
import Gotop_section from "../component/home_component/Gotop_section";
import Copyright_area from "../component/home_component/Copyright_area";
import Footer_subscribe_section from "../component/home_component/Footer_subscribe_section";
import Partner_section from "../component/home_component/Partner_section";
import Hire_section from "../component/home_component/Hire_section";
import Blog_section from "../component/home_component/Blog_section";
import Team_section from "../component/home_component/Team_section";

export default function Home() {
  return (
      <>
        {/* <Home_preloder /> */}
        <NavbarTop />
        <Banner />
        <Services_section />
        <About_section />
        <Overview_section />
        <Overview_section_2nd />
        <Portfolio_section />
        <Counter_section />
        <Testimonial_section />
        <Team_section />
        <Blog_section />
        <Hire_section />
        <Partner_section />
        <Footer_subscribe_section />
        <Copyright_area />
        <Gotop_section />
      </>

  );
}

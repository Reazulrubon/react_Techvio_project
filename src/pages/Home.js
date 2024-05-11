import React from "react";
import NavbarTop from "./NavbarTop";
import Home_preloder from "./Home_preloder";
import Banner from "./Banner";
import Services_section from "./Services_section";
import About_section from "./About_section";
import Overview_section from "./Overview_section";
import Overview_section_2nd from "./Overview_section_2nd";
import Portfolio_section from "./Portfolio_section";
import Counter_section from "./Counter_section";
import Testimonial_section from "./Testimonial_section";
import Gotop_section from "./Gotop_section";
import Copyright_area from "./Copyright_area";
import Footer_subscribe_section from "./Footer_subscribe_section";
import Partner_section from "./Partner_section";
import Hire_section from "./Hire_section";
import Blog_section from "./Blog_section";
import Team_section from "./Team_section";

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

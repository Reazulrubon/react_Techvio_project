import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Portfoliopage from "./pages/Portfoliopage";
import Contactpage from "./pages/Contactpage";
import AddService from "./component/service/AddService";
import ListService from "./component/service/ListService";
import UpdateService from "./component/service/UpdateService";
import AddTeam from "./component/team/AddTeam";
import ListTeam from "./component/team/ListTeam";
import UpdateTeam from "./component/team/UpdateTeam";
import AddBlog from "./component/blog/AddBlog";
import ListBlog from "./component/blog/ListBlog";
import UpdateBlog from "./component/blog/UpdateBlog";
import Admin_index2 from "./admin/Admin_index2";
import ServiceAdminAdd from "./admin/admin2_components/serviceadmin/ServiceAdminAdd";
import ServiceAdminList from "./admin/admin2_components/serviceadmin/ServiceAdminList";
import ServiceAdminUpdate from "./admin/admin2_components/serviceadmin/ServiceAdminUpdate";
import ServiceAdmin from "./admin/admin2_components/serviceadmin/ServiceAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/service" element={<Servicepage />} />
      <Route path="/portfolio" element={<Portfoliopage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/admin" element={<Admin_index2 />} />

      <Route path="/service/addservice" element={<AddService />} />
      <Route path="/service/listservice" element={<ListService />} />
      <Route path="/service/updateservice/:id" element={<UpdateService />} />

      <Route path="/team/addteam" element={<AddTeam />} />
      <Route path="/team/listteam" element={<ListTeam />} />
      <Route path="/team/updateteam/:id" element={<UpdateTeam />} />
      
      
      <Route path="/blog/addblog" element={<AddBlog/>} />
      <Route path="/blog/listblog" element={<ListBlog />} />
      <Route path="/blog/updateblog/:id" element={<UpdateBlog />} />

    
{/* //......service admin......... */}

      <Route path="/admin/service" element={<ServiceAdmin />} />
      <Route path="/admin/serviceadd" element={<ServiceAdminAdd />} />
      <Route path="/admin/servicelist" element={<ServiceAdminList />} />
      <Route path="/admin/serviceupdate/:id" element={<ServiceAdminUpdate />} />

      {/* //......service admin......... */}

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

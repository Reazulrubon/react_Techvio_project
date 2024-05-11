import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ServiceAdminList from './ServiceAdminList'

export default function ServiceAdmin() {
  return (
    <>

    <Admin2_asidebar/>
   <div className="content">
       <Admin2_nav/>


       <ServiceAdminList/>


     </div>
   </>
  )
}
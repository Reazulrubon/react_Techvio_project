import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ServiceAdminList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/REACT/aa/backend/service/listService.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/REACT/aa/backend/service/deleteService.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/REACT/aa/backend/service/listService.php")
                    .then((res) => setData(res.data))
            })
    }
  return (
    <>
    <div className='container card card-body'>
            <div>
                <h1 className="bg-secondary text-center text-bold">Services List</h1>

                <NavLink to={'/admin/serviceadd'} className="btn btn bg-primary">Add New</NavLink><br />
            </div>
            <table className='table table-bordered bg-secondary text-center text-bold'>
                <thead>
                    <tr>
                    <th>SL</th>
                        <th>Photo</th>
                        
                        <th>Title</th>
                        <th>content</th>
                        <th>Btn</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img src={`http://localhost/REACT/aa/backend/image/${d.photo}`} alt={d.title} height={100} /></td>
                                <td>{d.title}</td>
                                <td>{d.content}</td>
                                <td>{d.btn}</td>
                                
                                <td>
                                    <NavLink to={`/admin/serviceupdate/${d.id}`}>
                                        <button className='btn btn-xs btn-success'>Edit</button>
                                    </NavLink>
                                    <button className='btn btn-xs btn-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

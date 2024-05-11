import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function UpdateAbout() {
    const {id}=useParams()
    const [title, setTitle] = useState('')
    const [content, setcontent] = useState('')
    const [photo, setphoto] = useState('')
    const [btn, setbtn] = useState('')

    const navi=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost/REACT/react_palovit_project/backend/about/getAbout.php?id=${id}`)
        .then((res)=>{
            setTitle(res.data.title)
            setcontent(res.data.content)
            setbtn(res.data.btn)
        })
    },[])
    const save=()=>{
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('content',content)
        formdata.append('photo',photo)
        formdata.append('btn',btn)
        formdata.append('id',id)
        axios.post("http://localhost/REACT/react_palovit_project/backend/about/updateAbout.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setTitle('')
            setphoto('')
            setcontent('')
            setbtn('')
            navi('/about/listabout')
        })
    }
    return (
        <div className='container card card-body'>
            <div>
            <h1 className="bg-secondary text-center text-bold">Update abouts</h1>

<NavLink to={'/about/listabout'} className="btn btn bg-primary">abouts List</NavLink><br />
            
            </div>
            <table className='table table-bordered'>
                <tbody>
                <tr>
                    <th>Title</th>
                    <td><input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/></td>
                    <th>Photo</th>
                    <td><input type="file" className='form-control' onChange={(e)=>setphoto(e.target.files[0])}/></td>
                </tr>
                <tr>
                    <th>content</th>
                    <th colSpan={3}><textarea className='form-control' onChange={(e)=>setcontent(e.target.value)} value={content}></textarea></th>

                    <th>Btn</th>
                    <th colSpan={3}><textarea className='form-control' onChange={(e)=>setbtn(e.target.value)} value={btn}></textarea></th>
                </tr>
                <tr>
                    <th colSpan={4}><button onClick={save}>Save</button></th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

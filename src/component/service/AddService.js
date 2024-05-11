import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddService() {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [photo, setphoto] = useState("");
  const [btn, setbtn] = useState("");
  const navi = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("photo", photo);
    formdata.append("btn", btn);
    axios
      .post(
        "http://localhost/REACT/react_palovit_project/backend/service/addService.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setphoto("");
        setcontent("");
        setbtn("");
        navi("/service/listservice");
      });
  };
  return (
    <div className='container card card-body'>
      <h1 className="bg-secondary text-center text-bold">Add Chooses</h1>

      <NavLink to={"/service/listservice"} className="btn btn bg-primary">
        Chooses List
      </NavLink>
      <br />
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Title</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </td>
            <th>Photo</th>
            <td>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setphoto(e.target.files[0])}
              />
            </td>
          </tr>
          <tr>
            <th>content</th>
            <th colSpan={3}>
              <textarea
                className="form-control"
                onChange={(e) => setcontent(e.target.value)}
                value={content}
              ></textarea>
            </th>

            <th>Btn</th>
            <th colSpan={3}>
              <textarea
                className="form-control"
                onChange={(e) => setbtn(e.target.value)}
                value={btn}
              ></textarea>
            </th>
          </tr>
          <tr>
            <th colSpan={4}>
              <button onClick={save}>Save</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

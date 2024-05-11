import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function UpdateTeam() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [department, setdepartment] = useState("");
  const [photo, setphoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/REACT/aa/backend/team/getTeam.php?id=${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setdepartment(res.data.department);
      });
  }, []);
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("department", department);
    formdata.append("photo", photo);

    formdata.append("id", id);
    axios
      .post("http://localhost/REACT/aa/backend/team/updateTeam.php", formdata, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setphoto("");
        setdepartment("");

        navi("/team/listteam");
      });
  };
  return (
    <div className="container card card-body">
      <div>
        <h1 className="bg-secondary text-center text-bold">Update teams</h1>

        <NavLink to={"/team/listteam"} className="btn btn bg-primary">
          team List
        </NavLink>
        <br />
      </div>
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
            <th>department</th>
            <th colSpan={3}>
              <textarea
                className="form-control"
                onChange={(e) => setdepartment(e.target.value)}
                value={department}
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

/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Alltoy() {
  const [alltoy, setAllToy] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

//   show all toy data 
  useEffect(() => {
    fetch("http://localhost:5000/alltoy", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  //search toy's by name
  const handleSearch = () => {
    fetch(`http://localhost:5000/getJobsByText/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data);
      });
  };

  
  return (
    <div className="container table-responsive">
          <h4 className="text-center">All data show here</h4>
          <div className="d-flex justify-content-center" role="search">
        <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
      <table className="table my-5 table-hover table-striped text-center">
        <tbody className="p-3">
        <th>#id</th>
        <th>Picture</th>
        <th>User</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>rating</th>
        <th colSpan='2'>#Actions</th>
          {alltoy.map((toydata, index) => {
            return (
              <tr className="p-2">
                <th scope="row">{index + 1}</th>
                <td><img src={toydata.photo} alt="toy data image" className="img-fluid w-50" id="toyImg" /></td>
                <td>{user?.displayName}</td>
                <td>{toydata.toyname}</td>
                <td>{toydata.price}</td>
                <td>{toydata.quantity}</td>
                <td>{toydata.toyCategory}</td>
                <td>{toydata.rating}</td>
                <td>
                <Link to={`/singletoy/${toydata._id}`}>
                  <button className="btn text-white">View Details</button>
                </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

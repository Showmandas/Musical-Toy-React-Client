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
  const handleSearchToys = () => {
    fetch(`http://localhost:5000/searchToys/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToy(data);
      });
  };

  
  return (
    <div className="container table-responsive">
          <h4 className="text-center mt-5">All data show here</h4>
          <div className="d-flex justify-content-center w-50 m-auto mt-4 mb-4" role="search">
        <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
        <button onClick={handleSearchToys} className="btn btn-outline-info fw-bold" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
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
          {alltoy.map((toydata, index) => {
            return (
              <tr className="p-2">
                <th scope="row">{index + 1}</th>
                <td><img src={toydata.photo} alt="toy data image" className="img-fluid toyimg"  /></td>
                <td>{toydata.name}</td>
                <td>{toydata.toyname}</td>
                <td>{toydata.price}</td>
                <td>{toydata.quantity}</td>
                <td>{toydata.toyCategory}</td>
                <td>{toydata.rating}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

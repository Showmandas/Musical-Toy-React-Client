/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Alltoy() {
  const [alltoy, setAllToy] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  return (
    <div className="container table-responsive">
          <h4 className="text-center">All data show here</h4>
      <table className="table my-5 table-hover table-striped text-center">
        <tbody className="p-3">
        <th>#id</th>
        <th>Picture</th>
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
                <td>{toydata.toyname}</td>
                <td>{toydata.price}</td>
                <td>{toydata.quantity}</td>
                <td>{toydata.toyCategory}</td>
                <td>{toydata.rating}</td>
                <td>
                  <button className="btn text-white"><i className="fa-solid fa-trash-can text-danger fs-5"></i></button>
                </td>
                <td>
                    <button className="btn text-white"><i className="fa-regular fa-pen-to-square text-info fw-bold fs-5"></i></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

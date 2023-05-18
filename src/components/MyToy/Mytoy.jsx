/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";

// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
// import Update from "../Update/Update";

export default function Mytoy() {
  const [mydata, setMyData] = useState([]);
  const { user } = useContext(AuthContext);
  //   console.log(mydata);

  //show own user added toys
  useEffect(() => {
    fetch(`http://localhost:5000/mytoy?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [user]);

  //delete toy's data
  const handleDeleteToy = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = mydata.filter((data) => data._id !== id);
              setMyData(remaining);
            }
          });
      }
    });
  };

  
  return (
    <div className="container my-5">
      <table className="table text-center  table-striped table-hover table-responsive">
        <tbody>
        <th>#id</th>
        <th>Picture</th>
        <th>User</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>rating</th>
        <th>descrition</th>
        <th colSpan={2}>#Actions</th>
          {user ? mydata.map((data, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={data.photo}
                    alt="toy image"
                    className="img-fluid w-25 toyimg"
                  />
                </td>
                <td>{data.name}</td>
                <td>{data.toyname}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.toyCategory}</td>
                <td>{data.rating}</td>
                <td>{data.description}</td>
                <td>
                  <button
                    className="btn"
                    onClick={()=>handleDeleteToy(data._id)}
                  >
                    <i className="fa-solid fa-trash-can fs-5 text-danger"></i>
                  </button>
                </td>
                <td>
                <Link to={`/update/${data._id}`}>
                <button className="btn">
                <i className="fa-regular fs-5 text-info fa-pen-to-square"></i>
                </button>
                </Link>
                </td>
              </tr>
            );
          }):<h1 className="my-5">No data found</h1>}
        </tbody>
      </table>
     </div>  
  );
}

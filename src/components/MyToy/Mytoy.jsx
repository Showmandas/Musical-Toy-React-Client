/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Mytoy() {
    const [mydata, setMyData] = useState([]);
    const { user } = useContext(AuthContext);
//   console.log(mydata);
  const navigate=useNavigate()
//   const handleDelete = (id) => {
//     console.log(id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://doctor-server-nine.vercel.app/bookings/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");
//               const remaining = booking.filter(
//                 (bookdata) => bookdata._id !== id
//               );
//               setBooking(remaining);
//             }
//           });
//       }
//     });
//   };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy?email=${user?.email}`,{
      method:'GET',
    })
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [user]);

//   const handlePay = (id) => {
//     console.log(id);
//     fetch(`https://doctor-server-nine.vercel.app/bookings/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ status: "Paid" }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           const remaining = booking.filter((book) => book._id !== id);
//           const updated = booking.find((book) => book._id === id);
//           updated.status = "Paid";
//           const newBooking = [updated, ...remaining];
//           Swal.fire({
//             title: 'Payment Successful',
//             text:'Doctor will call you and give a serial number for appointment.Please wait',
//             icon: 'success',
//           })
//           // alert("sffsfdsf");
//           setBooking(newBooking);
//         }
//       });
//   };

  return (
    <div className="container">
      <table className="table">
        <tbody>
          {mydata.map((data, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img src={data.photo} alt="toy image" className="img-fluid w-25" /></td>
                <td>{data.toyname}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.rating}</td>
                <td>
                  <button
                    className="btn bg-danger text-white"
                  >
                    delete
                  </button>
                </td>
                <td>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

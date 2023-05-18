import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../AuthProvider/AuthProvider';

export default function ViewDetails() {
      const musicData=useLoaderData();
      const{id}=useParams()
    console.log(musicData)
    const{user}=useContext(AuthContext)
    const[details,setDetails]=useState([])
    console.log(details?.description)
  console.log(details.photo)

    useEffect(()=>{
        fetch(`http://localhost:5000/alltoy/${id}`,{
            method: "GET",
        })
        .then(res=>res.json())
        .then(data=>setDetails(data))

    },[user])
  return (
    <div className='container my-5'>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={details.photo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Seller Name : {details?.name}</h5>
        <h5 className="card-title">Seller Email : {details?.email}</h5>
        <h5 className="card-title">Toy Name : {details.toyname}</h5>
        <p className="card-text">Price : {details.price}</p>
        <p className="card-text">Rating : {details.rating}</p>
        <p className="card-text">Quantity : {details.quantity}</p>
        <p className="card-text">Description : {details?.description}</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

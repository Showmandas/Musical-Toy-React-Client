import React from 'react'

export default function CategoryCard({datas}) {
    const{_id,toyname,price,rating,quantity,toyCategory}=datas
  return (
    <div>
        <div className="card">
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{toyname}</h5>
    <p className="card-text">Price: {price}</p>
    <p className="card-text">Price: {toyCategory}</p>
    <a href="#" className="btn btn-primary">View Details</a>
  </div>
</div>
    </div>
  )
}

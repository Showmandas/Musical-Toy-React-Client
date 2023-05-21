import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function Update() {
  const { user } = useContext(AuthContext);
  const toyUpdateData = useLoaderData();
  console.log(toyUpdateData);
  const {
    _id,
    toyname,
    price,
    rating,
    email,
    name,
    photo,
    toyCategory,
    quantity,
    description,
  } = toyUpdateData;
  const navigate = useNavigate();

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.toyname.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const toyCategory = form.toyCategory.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const email = user.email;
    const name = user.displayName;
    const UpdatedToyData = {
      name,
      toyname,
      email,
      description,
      photo,
      toyCategory,
      price,
      rating,
      quantity,
    };
    console.log(UpdatedToyData);

    fetch(`https://musical-toy.vercel.app/mytoy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Toy's data successfully Updated",
            icon: "success",
          });
          navigate("/mytoy");
        }
      });
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 m-auto col-12">
          <div className="card p-5">
            <div className="mb-3 m-auto text-center">
              <h3>Update Toy Data</h3>
            </div>
            <form className="mb-5 p-2" onSubmit={handleUpdateToy}>
              <div className="mb-3">
                <label className="form-label">Toy Name</label>
                <input
                  type="text"
                  name="toyname"
                  className="form-control"
                  id="toyname"
                  placeholder="Enter your name"
                  defaultValue={toyname}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Seller Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  defaultValue={user?.email}
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label>Select Sub Category</label>
                <select
                  className="form-select w-50"
                  name="toyCategory"
                  aria-label="Default select example"
                  defaultValue={toyCategory}
                >
                  <option selected>Select subcategory</option>
                  <option value="Classical">Classical</option>
                  <option value="Pop">Pop</option>
                  <option value="Hip hop">Hip Hop</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="price"
                  defaultValue={price}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Available Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="form-control"
                  id="quantity"
                  defaultValue={quantity}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ratings</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  id="rating"
                  defaultValue={rating}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Toy's Photo url</label>
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  id="photo"
                  defaultValue={photo}
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter Details"
                    id="description"
                    defaultValue={description}
                  ></textarea>
                  <label>Give details description</label>
                </div>
              </div>
              <button type="submit" className="btn m-auto mt-3" id="loginBtn">
                Update Toy Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

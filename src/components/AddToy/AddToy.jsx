import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function AddToy() {
  //   const [success, setSuccess] = useState("");
  //   const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.toyname.value;
    const price = Number(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const toyCategory = form.toyCategory.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const email = user.email;
    const name = user.displayName;
    const toyData = {
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
    console.log(toyData);

    fetch("https://musical-toy.vercel.app/alltoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Toy's data successfully Added",
            icon: "success",
          });
          navigate("/alltoy");
        }
      });
  };
  //add dynamic title
  useEffect(() => {
    document.title = "Musical Toy | Add Toy";
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 m-auto col-12">
          <div className="card p-5">
            <div className="mb-3 m-auto text-center">
              <h3>Add Toy Here</h3>
            </div>
            <form className="mb-5 p-2" onSubmit={handleAddToy}>
              <div className="mb-3">
                <label className="form-label">Toy Name</label>
                <input
                  type="text"
                  name="toyname"
                  className="form-control"
                  id="toyname"
                  placeholder="Enter your name"
                  required
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
                  className="form-select w-100"
                  name="toyCategory"
                  aria-label="Default select example"
                  required
                >
                  <option>Select subcategory</option>
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
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Available Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="form-control"
                  id="quantity"
                  placeholder="Available Quantity"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ratings</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  id="rating"
                  placeholder="Give ratings"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Toy's Photo url</label>
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  id="photo"
                  placeholder="Enter photo url"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter Details"
                    id="description"
                    required
                  ></textarea>
                  <label>Give details description</label>
                </div>
              </div>
              <button type="submit" className="btn m-auto mt-3" id="loginBtn">
                Add Toy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

export default function Register() {
//   const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const{user,updateUser,googleSignIn,createUser}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleRegisterForm = (e) => {
    e.preventDefault();
    // setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const userData = { name, email, photo };

    console.log(userData);
    // validation
    if (password.length < 8) {
      setError("Password must be at least 8 character!");
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        const regUser = result.user;
        // setSuccess("Registration Successful");
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
          })
        e.target.reset();
        setError("");
        console.log(regUser);
        //display image in navmenu
        updateUser(result.user, name, photo);
        navigate('/')
      })
      .catch((error) => {
        const errMsg = error?.message;
        console.log(errMsg);
        // setError("");
      });
  };

  //add dynamic title
  useEffect(()=>{
    document.title="Musical Toy | Registration"
      },[]);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 m-auto col-12">
          <div className="card p-5">
            <div className="mb-3 m-auto text-center">
              <i className="fa-solid fa-circle-user fa-4x mb-3"></i>
              <h3>Register</h3>
            </div>
            <form className="mb-5 p-2" onSubmit={handleRegisterForm}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Photo url</label>
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  id="photo"
                  placeholder="Enter your photo url"
                  required
                />
              </div>
              <button type="submit" className="btn m-auto mt-3" id="loginBtn">
                Register
              </button>
            </form>
            <p className="text-center mb-4">
              Already Registered?please{" "}
              <Link to={"/login"} className="text-info fw-bold">
                Login
              </Link>
            </p>
            <div className="text-center">
              <p className="text-danger fw-bold text-center fs-4">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
export default function Header() {
  const { user,logOutUser } = useContext(AuthContext);

  const handleLoggedOut=()=>{
    logOutUser()
    .then(()=>{})
    .catch(error=>console.log(error.message))

  }
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg px-5 p-4" id="Navbar">
        <div className="container-fluid">
          <Link className=" navbar-brand">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={logo}
                alt="website brand logo"
                className="img-fluid img-responsive rounded-circle"
                id="brandLogo"
              />
              <span className="fs-4 fw-bold">Musical Toy</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item px-2">
                <Link to={"/"} className="nav-link">
                  <i className="fa-solid fa-house text-white"></i>
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-white fw-bold fs-5 ">
                  All Toys
                </Link>
              </li>
              {user && (
                <li className="nav-item px-2">
                  <Link className="nav-link text-white fw-bold fs-5">
                    My Toys
                  </Link>
                </li>
              )}

              {user && (
                <li className="nav-item px-2">
                  <Link className="nav-link text-white fw-bold fs-5">
                    Add a Toy
                  </Link>
                </li>
              )}

              <li className="nav-item px-2">
                <Link to={"/blog"} className="nav-link text-white fw-bold fs-5">
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center gap-3 px-5">
            {
              user && <img title={user?.displayName} src={user?.photoURL} className="img-fluid rounded-circle" id="userPic"/>
            }
              {user ? (
                <button onClick={handleLoggedOut} className="btn fw-bold border-secondary-subtle btn-outline-info p-3 text-white bg-secondary hover:bg-primary">
                  Logout
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn fw-bold border-secondary-subtle btn-outline-info p-3 text-white bg-secondary hover:bg-primary">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

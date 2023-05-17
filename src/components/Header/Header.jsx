import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg px-5 p-4" id='Navbar'>
  <div className="container-fluid">
    <Link className="navbar-brand px-5">
        <div className='d-flex justify-content-center align-items-center'>
            <img src={logo} alt="website brand logo" className='img-fluid rounded-circle' id='brandLogo' />
            <span className='fs-4 fw-bold'>Musical Toy</span>
        </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto text-center">
        <li className="nav-item px-2">
          <Link to={'/'} className="nav-link">
          <i className="fa-solid fa-house text-white"></i>
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link text-white fw-bold fs-5 ">All Toys</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link text-white fw-bold fs-5">My Toys</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link text-white fw-bold fs-5">Add a Toy</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link text-white fw-bold fs-5">Blogs</Link>
        </li>
      </ul>
      <div className="d-flex justify-content-center px-5">
        <Link>
        <button className="btn btn-outline-success">Login</button>
        </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

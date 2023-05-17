import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">All Toys</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">My Toys</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Add a Toy</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Blogs</Link>
        </li>
      </ul>
      <div className="d-flex" role="search">
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

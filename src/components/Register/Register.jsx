import React from 'react'
// import logImg from '../../assets/images/logImg.avif'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='container my-5'>
    <div className="row">
        <div className="col-lg-6 m-auto col-12">
            <div className="card p-5">
            <div className='mb-3 m-auto text-center'>
            <i className="fa-solid fa-circle-user fa-4x mb-3"></i>
            <h3>Register</h3>

            </div>
            <form className='mb-5 p-2'>
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text" name='name' className="form-control" id="name" placeholder='Enter your name' required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email' placeholder='Enter your email' className="form-control" id="email" required/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" name='password' className="form-control" placeholder='Enter password' id="password" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text" name='photo' className="form-control" id="photo" placeholder='Enter your photo url' required/>
  </div>
  <button type="submit" className="btn m-auto mt-3" id='loginBtn'>Register</button>
</form>
<p className='text-center mb-4'>Already Registered?please <Link to={'/login'} className='text-info fw-bold'>Login</Link></p>
            </div>
        </div>
        
    </div>

    </div>
  )
}

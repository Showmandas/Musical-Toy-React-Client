import React, { useContext, useState } from 'react'
// import logImg from '../../assets/images/logImg.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

export default function Login() {
    const { logInUser, user } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const handleLoginForm=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                // setSuccess('Log in successful')
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                  })
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errmsg = error.message;
                console.log(errmsg);
                setError(errmsg)
            })
    }
  return (
    <div className='container my-5'>
    <div className="row">
        <div className="col-lg-6 m-auto col-12">
            <div className="card p-5">
            <div className='mb-3 m-auto text-center'>
            <i className="fa-solid fa-circle-user fa-4x mb-3"></i>
            <h3>Login</h3>
            </div>
            <form className='mb-5 p-2' onSubmit={handleLoginForm}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" id="email" required/>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="password" />
  </div>
  <button type="submit" className="btn m-auto mt-3" id='loginBtn'>Login</button>
</form>
<p className='text-center mb-4'>Are you new to the site?please <Link to={'/register'} className='text-info fw-bold'>Register</Link></p>
<button className='btn bg-primary-subtle w-75 m-auto fw-bold fs-5'>Sign in with Google</button>
            </div>
            <div className='text-center'>
            <p className='text-danger fw-bold text-center fs-4'>{error}</p>
            </div>
        </div>
        
    </div>

    </div>
  )
}

import React, { useContext, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config'
import { ToastContainer, toast } from 'react-toastify';;

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogout } = useContext(AuthContext)
  const [error, setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('');
    const email = e.target.email.value
    const password = e.target.password.value

    handleLogin(email, password)
      .then(res => {
        from.rest()
        toast.success("login successfully!");
        // navigate(location?.state?.from);
        const redirectPath = location?.state?.from || "/";
        navigate(redirectPath);
      })
      .catch(err => {
        setError(err.message);
        toast.error("soming wrong!!!");
      })
  };
  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(res => {
        toast.success(" login with google successfully!");
        navigate('/')
      })
  }

  const handleForgetPassword = () => {
    console.log("give me mail address", emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      alert('please provide a valid email');
    }
    else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Passwoed reset email sent,pleasecheck your email')
        })
    }
  }

  return (
    <div className="  min-h-screen flex justify-center items-center bg-gray-200">
      <div className="rounded-xl card bg-base-100 w-full max-w-sm shrink-0  p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
        <ToastContainer />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100">Login</button>
          </div>


          <div className="form-control mt-6">
            <button onClick={googleLoginHandler} className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100" >Login With Google</button>
          </div>

        </form>
        {
          error && <p className='text-red-500'>Invalid Credential</p>
        }
        <p className="text-center font-semibold">
          Don't Have An account?
          <NavLink className="text-red-500" to="/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
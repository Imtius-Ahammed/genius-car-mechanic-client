import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/images/login/login.svg'
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const{login}=useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event =>{
    event.preventDefault();
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user.email)
      
      const currentUsers = {
        email: user.email 
      }
      console.log(currentUsers);

      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUsers)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        localStorage.setItem('genius-token', data.token);
        navigate(from,{replace: true});
      })
      
    })
    .catch(err=>console.log(err));

  }
  return (
    <div className="hero my-20">
      <div className="hero-content md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
         
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary " type="submit" value="Login" />
             
            </div>
          </form>
          <p className="text-center">Don't have An Account? <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

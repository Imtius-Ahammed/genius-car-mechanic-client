import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const SignUp = () => {
  const {createUser}= useContext(AuthContext);
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
   
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(err=>console.error(err))

  }
  return (
    <div className="hero my-20">
      <div className="hero-content md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
         
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-5xl text-center font-bold">SignUp now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name='name'
               
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name='email'
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
                name='password'
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-info' type="submit" value="SignUp" />
             
            </div>
          </form>
          <p className="text-center">Already Have An Account? <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
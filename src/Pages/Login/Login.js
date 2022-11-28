import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const{logInGoogle,logIn}=useContext(AuthContext)
    const location=useLocation()
    const naveget=useNavigate()

    const from =location.state?.from?.pathname || '/'

    const loginHandler=(event)=>{
        event.preventDefault()
    const form =event.target
    const password =form.password.value
    const email =form.email.value
     logIn(email,password)
     .then(result=>{
        const user=result.user;
        console.log(user)
        form.reset()
        naveget(from,{replace:true})
     })
     .then(error=>console.error(error))

    }

    const googleLogInhanler=()=>{
        logInGoogle()
        .then(result=>{
          const user=result.user;
          console.log(user)
        })
        .then(error=>console.log(error))
      }
    return (
        <div>
        <div className="hero min-h-screen ">
 
  <div className="hero-content flex-col  lg:flex-row-reverse">


<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

 <div className="card-body">
 <p className='text-center text-2xl font-signature'>Log In</p>
 <form onSubmit={loginHandler}>
 
 
   <div className="form-control">
     <label className="label">
       <span  className="label-text">Email</span>
     </label>
     <input type="email" name='email' placeholder="Type email" className="input input-bordered" required />
   </div>
   
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     <label className="label">
       <p>You Already Have No Account  <Link className='text-blue-400' to='/login'>Please Sing Up</Link></p>
     </label>
   </div>
   <div className="form-control mt-6">
     <button type='submit' className="btn btn-primary font-light ">Log In</button>
   </div>
   </form>
   <div>
   <div className="divider">OR</div>
   <button onClick={googleLogInhanler} className="btn btn-outline btn-primary w-full"><FaGoogle className='inline mr-7 text-xl'/> Google Log In</button>
   </div>
  
 </div>
</div>
</div>
  
  


</div>
    </div>
    );
};

export default Login;
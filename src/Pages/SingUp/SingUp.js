import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';

const SingUp = () => {
  const {createEamilPassword,logInGoogle,profileUpdate}=useContext(AuthContext)
  const loction =useLocation()
  const navigate =useNavigate()
  const [Error,setError]=useState()
  const from=loction.state?.from.pathname || '/'

  
  const singupHandler=(event)=>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value
    const PhotoUrl=form.PhotoUrl.value;
    const option =form.option.value
    const password =form.password.value;
    
    console.log(password,name,email,option,PhotoUrl) 
    createEamilPassword(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
      allUpdate(name,PhotoUrl)
      form.reset()
      const users={
        name,
        email,
        role:option,
        password
      }
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          'content-type': 'application/json'

        },
        body:JSON.stringify(users)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))

      // navigate(from ,{replace:true})
      
    })
    .catch(error=>{console.error(error)
      const mages =error.message;
      setError(mages)
    })

  }
  const googleLogInhanler=()=>{
    logInGoogle()
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>console.log(error))
  }


  const allUpdate=(name,photourl)=>{
    const profile={
      displayName:name,
      photoURL:photourl
    }
    profileUpdate(profile)
    .then(result=>{
      const user =result.user
      console.log(user)
    })
    .catch(error=>console.error("error",error))
  }

  
    return (
        <div>
            <div className="hero min-h-screen ">
     
      <div className="hero-content flex-col  lg:flex-row-reverse">
   
    
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   
     <div className="card-body">
     <p className='text-center text-2xl font-signature'>Sing Up</p>
     <form onSubmit={singupHandler}>
     <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" name='name' placeholder="Type name" className="input input-bordered" />
       </div>
     <div className="form-control">
         <label className="label">
           <span className="label-text">PhotoUrl</span>
         </label>
         <input type="text" name='PhotoUrl' placeholder="Type PhotoUrl" className="input input-bordered" />
       </div>
       <div className="form-control">
         <label className="label">
           <span  className="label-text">Email</span>
         </label>
         <input type="email" name='email' placeholder="Type email" className="input input-bordered" required />
       </div>
       <div>
       <label className="label">
           <span className="label-text">Role</span>
         </label>
       <select name="option" className="select select-primary w-full max-w-xs">
        <option >User</option>
          <option>Sellers</option>
         
              
 
           </select>
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         <label className="label">
           <p>You Already Have a Account  <Link className='text-blue-400' to='/login'>Please Log In</Link></p>
         </label>
       </div>
       <div className="form-control mt-6">
        <p className='text-red-400'>{Error}</p>
         <button type='submit' className="btn btn-primary font-light ">Sing Up</button>
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

export default SingUp;
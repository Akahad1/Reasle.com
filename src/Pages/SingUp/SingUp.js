import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';

const SingUp = () => {
  const singupHandler=(event)=>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value
    const option =form.option.value
    const password =form.password.value;
    console.log(password,name,email,option) 

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
           <span className="label-text">Email</span>
         </label>
         <input type="email" name='email' placeholder="Type email" className="input input-bordered" />
       </div>
       <div>
       <label className="label">
           <span className="label-text">Role</span>
         </label>
       <select name="option" className="select select-primary w-full max-w-xs">
        <option >Buyer</option>
          <option>Sellers</option>
              
 
           </select>
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" name='password' placeholder="password" className="input input-bordered" />
         <label className="label">
           <p>You Already Have a Account  <Link className='text-blue-400' to='/login'>Please Log In</Link></p>
         </label>
       </div>
       <div className="form-control mt-6">
         <button type='submit' className="btn btn-primary font-light ">Sing Up</button>
       </div>
       </form>
       <div>
       <div className="divider">OR</div>
       <button className="btn btn-outline btn-primary w-full"><FaGoogle className='inline mr-7 text-xl'/> Google Log In</button>
       </div>
      
     </div>
   </div>
 </div>
      
      


</div>
        </div>
    );
};

export default SingUp;
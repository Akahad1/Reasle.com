import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AllUsers = () => {
    // const {user}=useContext(AuthContext)

    const {data:Users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await fetch('https://resale-com-server.vercel.app/users')
            const data= await res.json()
            return data
        }
    })
    const handelMakeadmin=(id)=>{
        fetch(`https://resale-com-server.vercel.app/users/admin/${id}`,{
            method :'PUT',
            headers:{
                authorization: `berab ${localStorage.getItem('accesToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Make admin successful')
                refetch()
            }
        })

    }
    const deleteUersHandler=(id)=>{
        fetch(`https://resale-com-server.vercel.app/users/${id}`,{
            method:"DELETE",
            headers:{
                authorization :`bearer ${localStorage.getItem('accesToken')}`
              }
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            refetch()})

    }
    return (
        <div>
             <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
       
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Add Admin</th>
        <th>Delete</th>
        
       
      </tr>
    </thead>
    <tbody>
    {
        Users.map((user1,i)=><tr>
        <th>{i+1}</th>
        
  
        <td>{user1.name}</td>
        <td>{user1.email}</td>
        
        <td>{user1.role}</td>
        <td>{ user1?.role !== 'admin' &&<button onClick={()=>handelMakeadmin(user1._id)} className='btn btn-xs btn-primary'>Make admin</button>}</td>
        <td><button onClick={()=>deleteUersHandler(user1._id)} className='btn btn-xs btn-primary'>Delete</button></td>
        
      
      
      </tr>)
      }
        
      
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUsers;
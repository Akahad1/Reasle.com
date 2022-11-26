import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Myorder from '../Myoder/Myorder';

const MyOrders = () => {
    const{user}=useContext(AuthContext)
    const [oders,setoders]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setoders(data)
            
        })

    },[user?.email])
    return (
        <div>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
       
        <th>Name</th>
        <th>Price</th>
        
        <th>Location</th>
        <th>Pyment</th>
      </tr>
    </thead>
    <tbody>
    {
        oders.map((order,i)=><tr>
        <th>{i+1}</th>
        
  
        <td>{order.ProductName}</td>
        <td>{order.ProductPrice}</td>
        
        <td>{order.loction}</td>
        
      
      <td>{
      order.ProductPrice && !order.paid && <Link to={`/deshborad/payment/${order._id}`}>
      <button className='btn btn-primary btn-xs'>Pay</button>
      
      </Link> 
      }
      ,{
        order.Price && order.paid && <button className='text-green-400'>Paid</button>
      }
      </td>
      </tr>)
      }
        
      
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyOrders;
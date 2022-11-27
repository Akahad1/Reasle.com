import React, { useEffect } from 'react';
import { useState } from 'react';

const ReportItem = () => {
    const [report,setReport]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/report')
        .then(res=>res.json())
        .then(data=>setReport(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
       
        <th>Product Name</th>
        <th>Email</th>
        
        <th>Report Cause</th>
        <th>Report</th>
      </tr>
    </thead>
    <tbody>
    {
        report.map((order,i)=><tr>
        <th>{i+1}</th>
        
  
        <td>{order.productName}</td>
        <td>{order.RepoterEmail}</td>
        
        <td>{order.ReportCause}</td>
        <td>{order.Report}</td>
        
      
      
      </tr>)
      }
        
      
      
      
      
    </tbody>
  </table>
</div>
            
            
        </div>
    );
};

export default ReportItem;
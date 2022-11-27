import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Catagory = ({allCatagory}) => {
    const {name,img,descripetion,_id}=allCatagory;
    console.log(allCatagory)
    
    return (
        <div className='m-7'>
            <div className="card h-[400px] w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{descripetion
}</p>
    <div className="card-actions">
      <Link to={`/products/${_id}`}><button className="btn btn-primary">See Products</button></Link>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Catagory;
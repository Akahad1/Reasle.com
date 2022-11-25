import React from 'react';

const Catagory = ({allCatagory}) => {
    const {name,img,descripetion
    }=allCatagory;
    return (
        <div className='m-7'>
            <div className="card h-[550px] w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{descripetion
}</p>
    <div className="card-actions">
      <button className="btn btn-primary">See Products</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Catagory;
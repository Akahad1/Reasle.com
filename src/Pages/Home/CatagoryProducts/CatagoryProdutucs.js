import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryProduct from '../CatagoryProduct/CatagoryProduct';

const CatagoryProdutucs = () => {
    const Products =useLoaderData()
    
    console.log(Products)
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-20'>
            {
                Products.map((product,i)=><CatagoryProduct
                 key={i}
                 product={product}
                 
                 ></CatagoryProduct>)
            }
        </div>
    );
};

export default CatagoryProdutucs;
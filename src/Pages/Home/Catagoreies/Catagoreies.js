import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Catagory from '../Catagory/Catagory';

const Catagoreies = () => {
    const [catagorys,setCatagorys]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagory')
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 ml-6'>
            {
                catagorys.map(catagory=><Catagory 
                    allCatagory={catagory}
                    key={catagory._id}
                    ></Catagory>)
            }
            
        </div>
    );
};

export default Catagoreies;
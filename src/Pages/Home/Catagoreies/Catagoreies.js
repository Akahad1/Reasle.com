import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Catagory from '../Catagory/Catagory';

const Catagoreies = ({catagorys}) => {
    
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
import React, { useEffect, useState } from 'react';
import Catagoreies from '../Catagoreies/Catagoreies';


import HomeBenar from '../HomeBenar/HomeBenar';


const Home = () => {
    const [catagorys,setCatagorys]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagory')
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    },[])
    return (
        <div >
            <HomeBenar></HomeBenar>
            <Catagoreies catagorys={catagorys}></Catagoreies>
            
            
            
        </div>
    );
};

export default Home;
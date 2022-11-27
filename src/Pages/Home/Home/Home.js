import React, { useEffect, useState } from 'react';
import Catagoreies from '../Catagoreies/Catagoreies';


import HomeBenar from '../HomeBenar/HomeBenar';
import Section from '../Section/Section';


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
            <Section></Section>
            
            
            
        </div>
    );
};

export default Home;
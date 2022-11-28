import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    const{user}=useContext(AuthContext)
    const {data:products=[]}=useQuery({
        queryKey:['products',user?.email],
        queryFn:async()=>{
            const res=await fetch(`https://resale-com-server.vercel.app/products?email=${user?.email}`)
            const data=await res.json()
            return data
        }

    })
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2  mt-5 mr-5 gap-10'>
            {
              products.map(sellerProduct=><MyProduct
                 key={sellerProduct._id}
                 sellerProduct={sellerProduct}
                 ></MyProduct>)
            }
            
        </div>
    );
};

export default MyProducts;
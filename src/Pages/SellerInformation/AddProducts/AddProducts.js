import { fromJSON } from 'postcss';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddProducts = () => {
    const {user}=useContext(AuthContext)
    // const changehandler=(data)=>{
    //     const dataid =data;
    //     console.log(data)
    //     return data
    // AddProductHandelr(data)
        

    // }
    
    const AddProductHandelr=(event)=>{
        
        event.preventDefault()
        
        const form=event.target;
        const Productname =form.name.value;
        const catagoryName=form.catagoryName.value;
        const OriginalPrice=form.OriginalPrice.value;
        const ResalePrice=form.ResalePrice.value;
        const UseYears=form.UseYears.value
        const location=form.Location.value;
        const img=form.Photourl.value;
        const email=user.email
        
        const catagoriid =form.catagoryid.value
        const product ={
            name:Productname,
            sellerEmail:email,
            catagoryId:catagoriid,
            img:img,
            catagoryName:catagoryName,
            OriginalPrice,
            ResalePrice,
            Location:location,

            UseYears:UseYears,


        }
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(product)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               toast.success("successfully data add")
               alert('succufully add')
               form.reset()
            }
        })
        
        
        console.log(Productname,catagoryName,OriginalPrice,ResalePrice,UseYears,location,catagoriid,img)


    }
    return (
        <div  >
            <form className='  mt-5 flex justify-center' onSubmit={AddProductHandelr}>
            <div className="hero w-8/12 ">



<div className="card  w-full  shadow-2xl bg-base-100">

    <div className="card-body">
        <p className='text-4xl text-center font-signature'>Add Products</p>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Product Name</span>
            </label>
            <input type="text" name='name' placeholder=" Type Product-name" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Catagory-name</span>
            </label>
            <input type="text" name='catagoryName' placeholder=" Type Catagory-name" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Original-Price</span>
            </label>
            <input type="number" name='OriginalPrice' placeholder="OriginalPrice" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Resale-Price</span>
            </label>
            <input type="text" name='ResalePrice' placeholder="Type Resale-Price" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Use-Years</span>
            </label>
            <input type="text" name='UseYears' placeholder=" Type UseYears" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Photourl</span>
            </label>
            <input type="text" name='Photourl' placeholder=" Type photourl" className="input input-bordered" />
        </div>
        <fieldset>
            <legend>Choose your Catagory id Asus -638185ba460053f5205dc3c6,hp-638185ba460053f5205dc3c7,Dell Laptops-638185ba460053f5205dc3c7</legend>
            <div className='form-control'>
            <input type="text" name='catagoryid' placeholder="Type catagoryid" className="input input-bordered" />

            </div>
           
            
            
           
            
        </fieldset>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Location</span>
            </label>
            <input type="text" name='Location' placeholder="Type Location" className="input input-bordered" />
            <label className="label">

            </label>
        </div>
        <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Add Product</button>
        </div>
    </div>
</div>
</div>
            </form>
        </div>

    );
};

export default AddProducts;
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookingModal = ({product,id}) => {
    const {name,Location,OriginalPrice}=product;
    const {user,}=useContext(AuthContext)
    console.log(id)

    const bookingHandler=(event)=>{
        event.preventDefault()
        const form =event.target;
        const UserName =form.userName.value;
        const email =form.email.value
         const productName=form.ProductName.value
        const productprice=form.ProductPrice.value
        const loction =form.loction.value;
        const phoneNumber=form.phone.value;
        console.log(UserName,email,productName,productprice,loction,phoneNumber)

        const booking={
          catagoryId:id,
          UserName:UserName,
          email,
          ProductName:productName,
          ProductPrice:productprice,
          loction,
          phone:phoneNumber,
          
        }
        fetch('http://localhost:5000/booking',{
          method:"POST",
          headers:{
            'content-type' :'application/json'
        },
        body:JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
          if(data.acknowledged){
            toast.success('Successfully toasted!')
          }
        })




    }
    return (
        <div>
           
<input type="checkbox" id="bookingModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{name}</h3>
    <form onSubmit={bookingHandler}>
    
         <p>User Name</p>
    <input type="text" name='userName' value={user?.displayName} disabled className="input input-bordered mt-4 w-full " />
    <p>User Email</p>
    <input type="text" name='email' value={user?.email} disabled className="input input-bordered mt-4 w-full " />
    <p>Product Name</p>
    <input type="text" name='ProductName' value={name} disabled className="input input-bordered mt-4 w-full " />
    <p>Product Price</p>
    <input type="text" name='ProductPrice' value={OriginalPrice} disabled className="input input-bordered mt-4 w-full " />
    <p>Loction</p>
    <input type="text" name='loction'value={Location} disabled className="input input-bordered mt-4 w-full " />
    <p>Phone Number</p>
    <input type="number" name='phone' className="input input-bordered mt-4 w-full " />
    <button className='btn mt-3'>Submit</button>
    </form>
    <div className="modal-action">
      <label htmlFor="bookingModal" className="btn">Yay!</label>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BookingModal;
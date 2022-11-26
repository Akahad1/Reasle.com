import React from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import BookingModal from '../../../SellerInformation.js/BookingModal/BookingModal';


const CatagoryProduct = ({ product}) => {
    const {name,img,Location,OriginalPrice,ResalePrice,UseYears,catagoryId} =product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 mt-5 shadow-xl">
                <figure><img className='h-[230px] my-3 mx-3 rounded-xl  w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl">{name}</h2>
                    <p>Original-Price: ${OriginalPrice}</p>
                    <p>Resale-Price: ${ResalePrice}</p>
                    <p>Use-Years: ${UseYears}</p>
                    <p>Location : <FaMapMarkerAlt className='inline' /> { Location}</p>
                    <div className="card-actions  mt-3">
                        <label htmlFor="bookingModal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
                <div>
                    <BookingModal product={product} id={catagoryId}></BookingModal>
                </div>
            </div>

        </div>
    );
};

export default CatagoryProduct;
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import verified from '../../../../../../assets/image/verified.png'

const Card = ({ product, setBooking }) => {
    const { image, title, sellername, resalePrice, orginalPrice, yearOfUse, postedAgo,isVerify } = product;


    return (
        <div className='my-20'>
            <div className='border w-96 mx-auto h-[400px] px-4 shadow rounded relative'>
                <div className='flex items-center pt-3'>
                    <h1 className='font-medium '>{sellername}</h1>
                    {
                        isVerify? <img className='w-5 h-5 ml-1' src={verified} alt=""/>: ""
                    }
                </div>
                <div className='flex justify-center'>
                    <img className='w-60' src={image} alt="" />
                </div>
                <div className='flex justify-between'>
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold'>Resale Price: ${resalePrice}</p>
                </div>
                <div className='flex justify-between'>

                    <p className='font-semibold'>Orginal Price: ${orginalPrice}</p>
                    <p className='font-semibold'>Year Of Used: {yearOfUse}</p>
                </div>
                <div className='flex justify-between'>

                    <p className='font-semibold'>Posted Ago: {postedAgo}</p>
                </div>
                <div className='absolute bottom-0 w-full right-[1px]'>
                    <label onClick={() => setBooking(product)} htmlFor="my-modal-3" className="bg-orange-500 text-white text-center py-2 block hover:bg-orange-600 cursor-pointer rounded">Book Now</label>
                </div>
            </div>

        </div>
    );
};

export default Card;
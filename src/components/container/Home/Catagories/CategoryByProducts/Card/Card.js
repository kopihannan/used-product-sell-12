import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Card = ({ product }) => {
    const { image, title, sellername, resalePrice, orginalPrice,yearOfUse, postedAgo  } = product;


    return (
        <div className='w-[500px]'>
            <div className="card lg:card-side bg-base-100 shadow-md">
                <h1 className='text-lg font-bold text-[#188003] pl-5 pt-5 inline-block'>{sellername}</h1>
                <figure><img className='w-[200px]' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold'>Resale Price: ${resalePrice}</p>
                    <p>Orginal Price: ${orginalPrice}</p>
                    <p>Year Of Used: {yearOfUse}</p>
                    <p>Posted Ago: {postedAgo}</p>
                    <p>Posted Ago: {postedAgo}</p>
                    <p>Posted Ago: {postedAgo}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
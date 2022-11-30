import React from 'react';

const AdvertiseCard = ({ ads }) => {
    const {image, title, resalePrice} = ads;
    return (
        <div>
            <div className="card w-96 bg-base-100 border border-orange-500 py-5 rounded text-center">
                <div className="">
                    <h2 className="font-bold text-xl text-center text-orange-500">{title}</h2>
                    <h2 className="font-semibold text-center text-orange-600">Price: ${resalePrice}</h2>
                </div>
                <figure><img className='h-52 w-60' src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default AdvertiseCard;
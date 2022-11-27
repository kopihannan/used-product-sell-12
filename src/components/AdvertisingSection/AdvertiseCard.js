import React from 'react';

const AdvertiseCard = ({ ads }) => {
    const {image, title} = ads;
    return (
        <div>
            <div className="card w-96 bg-base-100 border rounded text-center">
                <div className="">
                    <h2 className="font-semibold text-xl text-center">{title}</h2>
                </div>
                <figure><img className='h-52 w-60' src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default AdvertiseCard;
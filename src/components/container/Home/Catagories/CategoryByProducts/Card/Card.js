import React from 'react';

const Card = ({ d }) => {
    const { image, title, price } = d;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-md">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
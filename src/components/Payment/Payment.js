import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    const { userName, productName, price, image } = data;
    return (
        <div className='w-2/4 bg-slate-100 m-10 p-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <div>
                    <img src={image} alt="" className='w-80' />
                    <h3 className="text-3xl text-orange-400">Payment for {productName}</h3>
                    <p className="text-xl">Please pay <span className='font-bold text-xl text-orange-500'>${price}</span> </p>
                    {/* <div className='w-96 my-12'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;
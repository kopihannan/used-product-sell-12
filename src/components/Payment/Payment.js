import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Spinner></Spinner>
    }
    
    const { productName, price, image, _id } = booking;
    console.log(_id);
    return (
        <div className='w-2/4 m-10 p-10 mx-auto bg-slate-100 rounded-md'>
            <div className='flex justify-center items-center'>
                <div>
                    <img src={image} alt="" className='w-80' />
                    <h3 className="text-3xl text-orange-400">Payment for {productName}</h3>
                    <p className="text-xl">Please pay <span className='font-bold text-xl text-orange-500'>${price}</span> </p>
                    <div className=' my-12'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={booking}></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
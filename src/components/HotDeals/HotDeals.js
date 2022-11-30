import React from 'react';
import CountDown from './CountDown';
import image from '../../assets/image/laptop.png'

const HotDeals = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-3xl text-orange-500 text-center my-20'>Hot Deals</h1>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200 rounded-md">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className='lg:w-1/2 md:w-1/2 w-full'>
                            <div className='w-full  flex justify-center text-center'>
                                <CountDown></CountDown>
                            </div>
                        </div>
                        <div className='lg:w-1/2 md:w-1/2 w-full'>
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;
import React from 'react';
import image from '../../../../assets/image/acer.png'
import bg from '../../../../assets/image/bg.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={image} alt='' />
                    <div className='lg:w-1/2 md:w-1/2 lg:bg-transparent w-full bg-white'>
                        <h1 style={{fontFamily: 'monospace'}} className="text-6xl font-bold text-[#a52306]">Quicker Best Laptop Shop</h1>
                        <p className="py-6 font-medium text-justify">Sell Laptops online in bangladesh? Quicker seller program lets you sell laptops online in bangladesh. All you have to do is register as daraz seller, list your items, and reveive payment for sold items.</p>
                        <button className="btn bg-[#E14D2A] border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
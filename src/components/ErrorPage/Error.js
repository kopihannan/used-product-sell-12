import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/image/error.gif'

const Error = () => {
    return (
        <div className='w-[550px] mx-auto text-center'>
            <div>
                <img src={error} alt="" />
                <p className='text-4xl font-bold text-orange-400 my-8'>Page Not Found</p>
                <Link to='/' className='btn btn-warning'>Back Home</Link>
            </div>
        </div>
    );
};

export default Error;
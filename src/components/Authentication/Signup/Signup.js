import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="bg-gradient-to-r from-[#e2863bbe] to-[#ec5d3dbb] py-20 rounded-lg">
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full bg-white rounded-md">
                        <form className="card-body">
                            <h2 className='text-center font-bold text-2xl text-[rgb(156,44,119)] pb-4'>Signup Form</h2>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered rounded-md" name='name' />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" className="input input-bordered rounded-md" name='email' />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Your Password" className="input rounded-md input-bordered w-full" name='password' />
                            </div>
                            <div className="form-control mt-3">
                                <button className="bg-[rgb(156,44,119)] hover:bg-[rgb(131,29,97)] py-3 w-full text-white rounded-md">Signup</button>
                            </div>

                            <div className='text-center mt-2'>
                                <small>Have an account <Link className='font-medium label-text-alt link link-hover' to='/login'> Login</Link></small>
                            </div>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline rounded-md'>continue with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
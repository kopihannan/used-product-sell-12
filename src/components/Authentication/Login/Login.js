import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-[#ec5d3dbb] to-[#e2863bbe] py-20 rounded-lg">
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full bg-white rounded-md">
                        <form className="card-body">
                            <h2 className='text-center font-bold text-2xl text-[rgb(156,44,119)] pb-4'>Login Form</h2>
                            <div className="form-control">
                                <input type="email" placeholder="Your email" className="input input-bordered rounded-md" name='email' />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Your password" className="input rounded-md input-bordered w-full" name='password' />
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[rgb(156,44,119)] hover:bg-[rgb(131,29,97)] py-3 w-full text-white rounded-md">Login</button>
                            </div>

                            <div className='text-center mt-2'>
                                <small><Link className='font-medium label-text-alt link link-hover' to='/signup'>Create an Account?</Link></small>
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

export default Login;
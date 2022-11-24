import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { user, loginForm, googleProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const provider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginForm(email, password)
            .then((result) => {

                navigate(from, { replace: true });
                toast.success("Login Successfull")
            })
            .catch((error) => {
                toast.error('failed login!')
            });
    }

    const handleGoogle = () => {
        googleProvider(provider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success("Login Successfull")
                console.log(user);
            })
            .catch(error => {
                toast.error('failed login!')
            })
    }

    return (
        <div className="bg-gradient-to-r from-[#f3c3b8bb] to-[#dfcec0be] py-20 rounded-lg">
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full bg-white rounded-md">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <button onClick={handleGoogle} className='btn btn-outline rounded-md'>continue with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
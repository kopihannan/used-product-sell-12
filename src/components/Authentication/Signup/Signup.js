import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Signup = () => {

    const { registerForm, updateProfileUser, googleProvider, setLoading } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const select = form.radio.value;

        

        registerForm(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateProfileUser(name, select)
                    .then(() => {
                        allUsers(name, email, select)
                        navigate('/')
                        toast.success("Registation Successfull");
                        setLoading(false)
                    })
                    .catch((error) => {
                        toast.error("username update failed")
                    })
            })
            .catch((error) => {
            });
    }

    const handleGoogleProvider = () => {
        googleProvider(provider)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
                toast.success("Registation Successfull")
            })
            .catch(error => {
            })
    }


    const allUsers = (name, email, select) => {
        const users = { name, email, select };
        fetch('http://localhost:5000/user', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="bg-gradient-to-r from-[#f3c3b8bb] to-[#dfcec0be] py-20 rounded-lg">
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full bg-white rounded-md">
                        <form onSubmit={handleRegister} className="card-body">
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
                            <div>
                                <input type="radio" name="radio" value="buyer" /><span className='pl-2 font-medium'>Buyer</span> <br />
                                <input type="radio" name="radio" value="seller" /><span className='pl-2 font-medium'>Seller</span>
                            </div>

                            <div className="form-control mt-3">
                                <button className="bg-[rgb(156,44,119)] hover:bg-[rgb(131,29,97)] py-3 w-full text-white rounded-md">Signup</button>
                            </div>

                            <div className='text-center mt-2'>
                                <small>Have an account? <Link className='font-medium label-text-alt link link-hover' to='/login'> Login</Link></small>
                            </div>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleProvider} className='btn btn-outline rounded-md'>continue with google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
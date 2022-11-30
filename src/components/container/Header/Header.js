
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../assets/image/logo.png'

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);


    const hangleLogout = () => {
        userLogout()
            .then(() => {

            }).catch(() => {

            });
    }


    return (
        <div>
            <div className="navbar shadow bg-gray-50 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='font-semibold' to='/'>Home</Link></li>
                            <li><Link className='font-semibold' to='/admin'>Dashboard</Link></li>
                            <li><Link className='font-semibold' to='/blog'>Blog</Link></li>

                            {
                                user?.uid ? <button onClick={hangleLogout} className='font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-full px-9'>Logout</button> : <li><Link className='font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-full px-9' to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='w-9 h-9 mr-3' src={logo} alt="" />
                        <Link to='/' className="text-[#E14D2A] text-2xl font-bold">Quicker</Link>

                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='font-semibold' to='/'>Home</Link></li>
                        <li><Link className='font-semibold' to='/admin'>Dashboard</Link></li>
                        <li><Link className='font-semibold' to='/blog'>Blog</Link></li>

                        {
                            user?.uid ? <button onClick={hangleLogout} className='font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-full px-9'>Logout</button> : <li><Link className='font-semibold bg-orange-500 hover:bg-orange-700 text-white rounded-full px-9' to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
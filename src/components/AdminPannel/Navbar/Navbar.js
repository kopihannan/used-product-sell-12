import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AdminProvier from '../../AllHocks/AdminProvier';
import SellerProvider from '../../AllHocks/SellerProvider/SellerProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = AdminProvier(user?.email);
    const [isType] = SellerProvider(user?.email)


    return (
        <div>
            <div className="navbar bg-orange-100 py-4">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-xl">Hi! {user?.displayName}</h1 >
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">


                        {
                            isAdmin && <>
                                <li><Link to='/admin/user' className='btn btn-accent rounded-md'>All Users</Link></li>
                            </>
                        }

                        {
                            isType && <>
                            <li><Link to='/admin/addproduct' className='btn btn-accent rounded-md'>Add Product</Link></li>
                            <li><Link to='/admin/manageproduct' className='btn btn-accent rounded-md ml-5'>Manage Product</Link></li>

                            </>
                        }

                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
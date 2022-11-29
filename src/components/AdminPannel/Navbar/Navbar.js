import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useAdmin from '../../AllHocks/useAdmin';
import SellerProvider from '../../AllHocks/SellerProvider/SellerProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isType] = SellerProvider(user?.email)


    return (
        <div>
            <div className="navbar bg-orange-50 py-4">
                <div className="flex-1">
                    <h1 className="btn btn-ghost normal-case text-xl">Hi! {user?.displayName}</h1 >
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">


                        {
                            isAdmin && <>
                                <li><Link to='/admin/user' className='bg-orange-500 hover:bg-orange-600 font-semibold text-white rounded-md mr-5'>All Buyer</Link></li>
                                <li><Link to='/admin/allseller' className='bg-orange-500 hover:bg-orange-600 font-semibold text-white rounded-md mr-5'>All Seller</Link></li>
                            </>
                        }

                        {
                            isType && <>
                                <li><Link to='/admin/addproduct' className='bg-orange-500 hover:bg-orange-600 font-semibold text-white rounded-md'>Add Product</Link></li>
                                <li><Link to='/admin/manageproduct' className='bg-orange-500 hover:bg-orange-600 font-semibold text-white rounded-md ml-5'>Manage Product</Link></li>

                            </>
                        }
                        {
                            !isType && <li><Link to='/admin/myorder' className='bg-orange-500 hover:bg-orange-600 font-semibold text-white rounded-md'>My Orders</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
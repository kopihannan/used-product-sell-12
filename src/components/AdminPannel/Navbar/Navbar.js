import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import AdminProvier from '../../AllHocks/AdminProvier';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = AdminProvier(user?.email)
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/admin' className="btn btn-ghost normal-case text-xl">Admin Panel</Link >
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">


                        {
                            isAdmin && <>
                                <li><Link to='/admin/user' className='btn btn-accent rounded-md'>All Users</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
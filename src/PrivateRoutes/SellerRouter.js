import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Spinner from '../components/Spinner/Spinner';
import SellerProvider from '../components/AllHocks/SellerProvider/SellerProvider';

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isType, isSellerLoading] = SellerProvider(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Spinner></Spinner>
    }

    if (user && isType) {
        return children;
    }
 
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRouter;
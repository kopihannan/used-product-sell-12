import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../container/Footer/Footer';
import Header from '../container/Header/Header';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import React from 'react';
import Advertise from '../../AdvertisingSection/Advertise';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;
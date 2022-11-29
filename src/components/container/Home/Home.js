import React from 'react';
import Advertise from '../../AdvertisingSection/Advertise';
import HotDeals from '../../HotDeals/HotDeals';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <HotDeals></HotDeals>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;
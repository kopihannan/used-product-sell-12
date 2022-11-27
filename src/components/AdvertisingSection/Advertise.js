import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['ads'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/ads");
            const data = await res.json();
            return data
        }
    });



    return (
        <div className='my-20'>
            <h1 className='font-bold text-4xl text-center mb-10 text-orange-500'>Advertising</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto'>
                {
                    advertise.map(ads => <AdvertiseCard ads={ads}
                        key={ads._id} >

                    </AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;
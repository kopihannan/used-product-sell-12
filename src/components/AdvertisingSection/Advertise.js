import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['ads'],
        queryFn: async () => {
            const res = await fetch("https://quicker-seven.vercel.app/ads");
            const data = await res.json();
            return data
        }
    });



    return (
        <div className='my-20'>
            <h1 className='font-bold text-3xl text-center mb-10 text-orange-500'>Advertising</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mx-auto justify-center items-center gap-6'>
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
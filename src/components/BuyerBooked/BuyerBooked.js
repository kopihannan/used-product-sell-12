import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import BuyerBookCard from './BuyerBookCard';

const BuyerBooked = () => {
    const { user } = useContext(AuthContext)

    const { data: myOrders = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://quicker-seven.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map(seller => <BuyerBookCard
                                seller={seller}
                                key={seller._id} >
                            </BuyerBookCard>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default BuyerBooked;



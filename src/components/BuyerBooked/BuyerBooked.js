import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';
import BuyerBookCard from './BuyerBookCard';

const BuyerBooked = () => {
    const { user } = useContext(AuthContext)

    const { data: myOrders = [], refetch, isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking/${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
                            <th>price</th>
                            <th></th>
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



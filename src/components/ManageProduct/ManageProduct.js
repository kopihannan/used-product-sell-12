import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';
import MangeProductCard from './MangeProductCard';

const ManageProduct = () => {

    const { user } = useContext(AuthContext);

    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['user?.email',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categorie/category/${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete your review?");
        if (confirm) {

            fetch(`http://localhost:5000/categorie/category/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => data


                )
        }
    };

    const handleAdvertise = (ads) => {

        const {image, resalePrice, title,} = ads;

        const advertise = {
            image,
            resalePrice,
            title
        }

        fetch('http://localhost:5000/ads', {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledge) {
                toast.success("Successfull")
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => <MangeProductCard seller={seller} key={seller._id} handleDelete={handleDelete} handleAdvertise={handleAdvertise}></MangeProductCard>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageProduct;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MangeProductCard from './MangeProductCard';

const ManageProduct = () => {
    const [sellers, setSellers] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/categorie/category/${user?.email}`)
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [user?.email])

    const handleDelete =(id)=>{
        const confirm = window.confirm("Are you sure you want to delete your review?");
        if (confirm) {

            fetch(`http://localhost:5000/categorie/category/${id}`, {
                method: 'DELETE',
                
            })
                .then(res => res.json())
                .then(data => data
                //     {
                //     console.log(data);
                //     if (data.deletedCount > 0) {
                //         const remaining = sellers.filter(odr => odr._id !== id);
                //         setSellers(remaining);
                //     }
                // }
                
                )
        }
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => <MangeProductCard seller={seller} key={seller._id} handleDelete={handleDelete}></MangeProductCard>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageProduct;
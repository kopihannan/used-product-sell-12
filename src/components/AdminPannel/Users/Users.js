import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user', ],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/buyer`);
            const data = await res.json();
            return data;
        }
    });

    const handleVerified = email => {
        console.log(email);
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make verified successful.')
                    refetch();
                }
            })
    }


    const handleDelete = (id) => {

        const confirm = window.confirm("Are you sure delete this account")
        if (confirm) {
            fetch(`http://localhost:5000/user/${id}`, {
                method: "DELETE"
            }).then(rel => rel.json()).then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted successfully')
                }
            })
        }


    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Verified</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((users, i) => <tr key={users._id}>
                                    <th>{i + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.select}</td>
                                    <td>
                                        {users?.isVerified !== true && <button onClick={() => handleVerified(users.email)} className='bg-orange-500 py-1 px-2 hover:bg-orange-700 rounded-md font-medium text-white'>Pending</button>}
                                        {
                                            users?.isVerified === true && <p className='font-bold text-green-600'>Verified</p>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(users._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
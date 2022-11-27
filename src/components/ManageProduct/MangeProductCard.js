import React from 'react';

const MangeProductCard = ({ seller, handleDelete, handleAdvertise }) => {
    const { image, resalePrice, title, _id } = seller;
    console.log(seller);
    return (
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                        </div>
                    </div>
                </td>
                <td>unsold</td>
                <td>{resalePrice}</td>
                <th>
                    <button onClick={()=> handleAdvertise (seller)} className="btn btn-success hover:bg-green-700 text-white btn-xs">Advertise</button>
                </th>
                <th>
                    <button onClick={()=> handleDelete (_id)} className="btn btn-error hover:bg-red-700 text-white btn-xs">Delete</button>
                </th>
            </tr>
    );
};

export default MangeProductCard;
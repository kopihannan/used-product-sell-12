import React from 'react';
import { Link } from 'react-router-dom';

const BuyerBookCard = ({ seller, handleDelete }) => {
    const { image, productName, price, _id, locationCustomer } = seller;
    console.log(seller);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                    </div>
                </div>
            </td>
            <td>
                {locationCustomer}
            </td>
            <td>{price}</td>
            <th>
                {
                    seller.price && !seller.paid && <Link
                        to={`/admin/payment/${_id}`}
                    >
                        <button
                            className='btn bg-orange-500 border-none btn-sm'
                        >Payment</button>
                    </Link>
                }
                {
                    seller.price && seller.paid && <span className='text-green-600 font-bold'>paid success</span>
                }
            </th>
        </tr>
    );
};

export default BuyerBookCard;



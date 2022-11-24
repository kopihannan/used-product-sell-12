import React from 'react';
import { Link } from 'react-router-dom';

const CategoiresCard = ({ categorie, handleCategori }) => {
    const { image, title, category } = categorie;
    return (
        <div>
            <div className='bg-red-100 text-center py-5 '>
                <div className='flex justify-center'>
                    <img className='w-80 cursor-pointer' src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <Link to={`/categories/${category}`}>View all</Link>
            </div>
        </div>
    );
};

export default CategoiresCard;
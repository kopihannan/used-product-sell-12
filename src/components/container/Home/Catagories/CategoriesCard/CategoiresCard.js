import React from 'react';
import { Link } from 'react-router-dom';

const CategoiresCard = ({ categorie, handleCategori }) => {
    const { image, title, category } = categorie;
    return (
        <div>
            {/* <div className=' border rounded-md'>
                <div className=' text-center'>
                    <div className='flex justify-center'>
                        <img className='w-80 cursor-pointer' src={image} alt="" />
                    </div>
                    <h3 className='font-bold text-xl'>{title}</h3>
                    <div className='pt-5'>
                        <Link className='font-semibold block bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md' to={`/categorie/${category}`}>View all</Link>
                    </div>
                </div>
            </div> */}


            <div className="card w-96 shadow image-full">
                <figure><img  src={image} alt="Shoes" /></figure>
                <div className="card-body flex justify-center items-center">
                    <div>
                        <h2 className="card-title text-center">{title}</h2>
                        <div className='pt-5'>
                            <Link className='font-semibold px-10 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md' to={`/categorie/${category}`}>View all</Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default CategoiresCard;
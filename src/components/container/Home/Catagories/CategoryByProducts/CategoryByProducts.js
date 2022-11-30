import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card/Card';
import Modal from './Card/Modal/Modal';

const CategoryByProducts = () => {
    // const data = useLoaderData();
    const [booking, setBooking] = useState(null);
    const [data, setData] = useState([]);

    const category = useParams();
    console.log(category);

    useEffect(() => {
        fetch(`https://quicker-seven.vercel.app/categorie/${category.category}`)
        .then(res => res.json())
        .then(data => setData(data))
 }, [data])


    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    data.map(product => <Card product={product} key={product._id}
                        setBooking={setBooking}>

                    </Card>)

                }
            </div>
            {
                booking &&
                <Modal setBooking={setBooking} booking={booking}></Modal>
            }
        </div>

    );
};

export default CategoryByProducts;
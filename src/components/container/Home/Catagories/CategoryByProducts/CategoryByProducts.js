import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const CategoryByProducts = () => {

    const data = useLoaderData()
    console.log(data);
 

    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                data.map(d => <Card d={d} key={d._id}></Card>)
            }
        </div>
    );
};

export default CategoryByProducts;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import Modal from './Card/Modal/Modal';

const CategoryByProducts = () => {

    const data = useLoaderData()

    

    return (
        <div>
            <div className='grid grid-cols-2 gap-6'>
            {
                data.map(product => <Card product={product} key={product._id}></Card>)
                 
            }
        </div>
            <Modal data={data}></Modal>
        </div>
          
    );
};

export default CategoryByProducts;
import React, { useEffect, useState } from 'react';
import CategoiresCard from './CategoriesCard/CategoiresCard';

const Catagories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categorie')
            .then(rel => rel.json())
            .then(data => setCategories(data))
    }, [])

    const handleCategori =(id)=>{
        console.log(id);
    }

    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-3xl my-20 text-orange-500'>Browse All Categories</h1>
            </div>
            <div className='mb-20'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center'>
                    {
                        categories.map(categorie => <CategoiresCard key={categorie._id} categorie={categorie} handleCategori={handleCategori}></CategoiresCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagories;
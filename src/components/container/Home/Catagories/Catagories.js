import React, { useEffect, useState } from 'react';
import CategoiresCard from './CategoriesCard/CategoiresCard';

const Catagories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(rel => rel.json())
            .then(data => setCategories(data))
    }, [])

    const handleCategori =(id)=>{
        console.log(id);
    }

    return (
        <div>
            <div>
                <h1>Category</h1>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-6 justify-center'>
                    {
                        categories.map(categorie => <CategoiresCard key={categorie._id} categorie={categorie} handleCategori={handleCategori}></CategoiresCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagories;
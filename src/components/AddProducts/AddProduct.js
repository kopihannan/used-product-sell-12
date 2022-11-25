import React from 'react';
import {toast} from 'react-hot-toast';

const AddProduct = () => {


    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const orginalPrice = form.orginalPrice.value;
        const yearOfUse = form.yearOfUse.value;
        const postedAgo = form.postedAgo.value;
        const category = form.category.value;

        products(title,image, postedAgo, location, resalePrice, orginalPrice, yearOfUse, category);
        form.reset()
    }

    
    const products = (title,image, postedAgo, location, resalePrice, orginalPrice, yearOfUse, category) => {
        const products = {title,image, postedAgo, location, resalePrice, orginalPrice, yearOfUse, category};
        fetch('http://localhost:5000/categories', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Add Product Succesfully")
            })
    }

    return (

        <form onSubmit={handleAddProduct}>
            <div className='w-[500px] mx-auto my-10 bg-red-200 p-10 rounded'>
                <input name='title' type="text" placeholder="Product Name" className="input input-bordered w-full mb-3" />
                <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full mb-3" />
                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full  mb-3" />
                <input name='resalePrice' type="number" placeholder="resale price" className="input input-bordered w-full  mb-3" />
                <input name='orginalPrice' type="number" placeholder="original price" className="input input-bordered w-full  mb-3" />
                <input name='yearOfUse' type="text" placeholder="years of use" className="input input-bordered w-full  mb-3" />
                <select name='category' className="select select-bordered w-full mb-3">
                    <option disabled >Select Your Product Category?</option>
                    <option>keybord</option>
                    <option>mouse</option>
                    <option>ssd</option>
                </select>
                <input className='input input-bordered w-full  mb-5' placeholder='date and time' name='postedAgo' type="datetime-local" />
                <button className='w-full bg-green-500 py-2 rounded text-white font-bold hover:bg-green-600' type="submit">Add Product</button>
            </div>
        </form>
    );
};

export default AddProduct;
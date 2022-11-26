import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const sellername = form.sellername.value;
        const image = form.image.value;
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const orginalPrice = form.orginalPrice.value;
        const yearOfUse = form.yearOfUse.value;
        const postedAgo = form.postedAgo.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        products(sellername, title, image, postedAgo, email, location, resalePrice, orginalPrice, yearOfUse, category, condition, number, message);
        form.reset();
        toast.success("Add Product Succesfully")
        navigate('/admin/manageproduct')
    }


    const products = (sellername, title, image, postedAgo, email, location, resalePrice, orginalPrice, yearOfUse, category, condition, number) => {
        const products = { sellername, title, image, postedAgo, email, location, resalePrice, orginalPrice, yearOfUse, category, condition , number};
        fetch('http://localhost:5000/categorie', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledge) {
            }
        })
    }

    return (

        <form onSubmit={handleAddProduct}>
            <div className='w-[500px] mx-auto my-10 bg-red-200 p-10 rounded'>
                <input className='input input-bordered w-full  mb-5' required defaultValue={user.email} disabled name='email' type="email" />
                <input required disabled name='sellername' type="text" placeholder="Product Name" className="input input-bordered w-full mb-3" defaultValue={user?.displayName} />
                <input name='title' type="text" required placeholder="Product Name" className="input input-bordered w-full mb-3" />
                <input name='number' type="number" required placeholder="Your mobile number" className="input input-bordered w-full mb-3" />
                <input name='image' type="text" required placeholder="Image URL" className="input input-bordered w-full mb-3" />
                <input name='location' type="text" required placeholder="Location" className="input input-bordered w-full  mb-3" />
                <input name='resalePrice' type="number" required placeholder="resale price" className="input input-bordered w-full  mb-3" />
                <input name='orginalPrice' type="number" required placeholder="original price" className="input input-bordered w-full  mb-3" />
                <input name='yearOfUse' type="text" required placeholder="years of use" className="input input-bordered w-full  mb-3" />
                <div>
                    <select name='category' className="select select-bordered w-full mb-3">
                        <option disabled>Select Your Product Category?</option>
                        <option>keybord</option>
                        <option>mouse</option>
                        <option>ssd</option>
                    </select>
                </div>
                <div>
                    <select name='condition' className="select select-bordered w-full mb-3">
                        <option disabled>Product Condition </option>
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>
                <input className='input input-bordered w-full  mb-3' required placeholder='date and time' name='postedAgo' type="datetime-local" />
                <textarea name='message' className="textarea w-full textarea-bordered" placeholder="Type product details"></textarea>
                <button className='w-full bg-green-500 py-2 rounded text-white font-bold hover:bg-green-600' type="submit">Add Product</button>
            </div>
        </form>
    );
};

export default AddProduct;
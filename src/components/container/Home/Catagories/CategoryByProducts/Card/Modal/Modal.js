import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';

const Modal = ({ booking, setBooking }) => {

    const { title, resalePrice, image } = booking;
    const { user } = useContext(AuthContext)

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const userName = form.userName.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const locationCustomer = form.locationCustomer.value;

        form.reset()

        const booked = {
            email,
            userName,
            productName,
            price,
            phoneNumber,
            locationCustomer,
            image

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booked)
        }).then(res => res.json()).then(data => {

            console.log(data);
            if (data.acknowledged) {
                setBooking(null);
                toast.success("Booking Success")
            }
            else {
                toast.error(data.message);
            }
        })

    }


    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleBooking} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking Now Choosen Product</h3>
                    <span className="label-text">Your email</span>
                    <input disabled defaultValue={user?.email} className="input input-bordered w-full mb-3" name='email' />
                    <span className="label-text">Your Name</span>
                    <input disabled defaultValue={user?.displayName} className="input input-bordered w-full mb-3" name='userName' />
                    <span className="label-text">Product Name</span>
                    <input disabled defaultValue={title} className="input input-bordered w-full mb-3" name='productName' />
                    <span className="label-text">Price</span>
                    <input disabled defaultValue={resalePrice} className="input input-bordered w-full mb-3" name='price' />
                    <span className="label-text">Your Number</span>
                    <input required type="number" placeholder='Enter your number' className="input input-bordered w-full mb-3" name='phoneNumber' />
                    <span className="label-text">Your Location</span>
                    <input required type="text" placeholder='Your Location' className="input input-bordered w-full mb-5" name='locationCustomer' />

                    <div className="modal-action">
                        <button className='w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md' type="submit" value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Modal;
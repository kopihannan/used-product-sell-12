import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../../context/AuthProvider/AuthProvider';

const Modal = ({ data }) => {
    console.log(data);
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    const handleBooking =()=>{
        toast.success("Booking Success")
    }

    return (
        <div>
            {
                data.map(p => <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <form onSubmit={handleBooking} className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <input disabled defaultValue={displayName} className="input input-bordered w-full my-3" />
                            <input disabled defaultValue={email} className="input input-bordered w-full mb-3" />
                            <input disabled defaultValue={p.title} className="input input-bordered w-full mb-3" />
                            <input disabled defaultValue={p.resalePrice} className="input input-bordered w-full mb-3" />
                            <input required type="number" disabled defaultValue={p.number} className="input input-bordered w-full mb-3" />
                            <input required type="text" disabled defaultValue={p.location} className="input input-bordered w-full mb-5" />
                            <button className='w-full btn btn-primary' type="submit">Submit</button>
                        </form>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Modal;
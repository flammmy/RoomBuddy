import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Editbooking = () => {
    let navigate = useNavigate();
    let params = useParams();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [rno, setRno] = useState("");
    let [price, setPrice] = useState("");
    let [duration, setDuration] = useState("");
    let [type, setType] = useState("");
    let [bookingdate, setBookingdate] = useState("");
    let [status, setStatus] = useState("");

    useEffect(() => {
        editBooking();
    }, []);

    let editBooking = async () => {
        let result = await fetch(`http://localhost:4500/editbooking/${params.id}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setContact(result.contact);
        setRno(result.roomno);
        setPrice(result.price);
        setDuration(result.duration);
        setType(result.type);
        setBookingdate(result.bookingdate);
        setStatus(result.status);
    }

    let updatebooking = async () => {
        let result = await fetch(`http://localhost:4500/updatebooking/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, email, contact, rno, price, duration, type, bookingdate, status }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        if (result) {
            alert("Status Updated Successfully");
            navigate('/viewbooking');
        }
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main style={{ padding: "2rem", width: "100%" }}>
                <div className="main-heading">
                    <h2>Response Booking</h2>
                </div>
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12'>
                            <div className='card p-4'>
                                <div className="row">
                                <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' value={name} readOnly />
                                </div>
                                <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Email</label>
                                    <input type='text' className='form-control' value={email} readOnly />
                                </div>
                                </div>
                               <div className="row">
                               <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Contact</label>
                                    <input type='text' className='form-control' value={contact} readOnly />
                                </div>
                                <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Room No.</label>
                                    <input type='text' className='form-control' value={rno} readOnly />
                                </div>
                               </div>
                              <div className="row">
                              <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Price</label>
                                    <input type='number' className='form-control' value={price} readOnly />
                                </div>
                                <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Duration</label>
                                    <input type='text' className='form-control' value={duration} readOnly />
                                </div>
                              </div>
                              <div className="row">
                              <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Type</label>
                                    <input type='text' className='form-control' value={type} readOnly />
                                </div>
                                <div className='mb-2 col-lg-6'>
                                    <label className='form-label'>Booking Date</label>
                                    <input type='date' className='form-control' value={bookingdate} readOnly />
                                </div>
                              </div>
                              
                                <div className='mb-2 col-lg-12'>
                                    <label className='form-label'>Current Status</label>
                                    <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirm">Confirm</option>
                                        <option value="Canceled">Canceled</option>
                                    </select>
                                </div>
                                <button onClick={updatebooking} className='btn btn-primary w-100'>Update Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Editbooking;

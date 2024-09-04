import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Common/Sidebar';

const GeneratePin = () => {
    const [pins, setPins] = useState([]);
    const [generatedPins, setGeneratedPins] = useState([]);

    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        const newPins = [];
        for (let i = 0; i < 3; i++) {
            const pin = `RB${generateRandomString(8)}`;
            newPins.push({ plan: 'Annual Subscription', amount: '2000', pin, status: '1' });
        }
        console.log('New pins:', newPins);

        try {
            for (let i = 0; i < newPins.length; i++) {
                const response = await fetch('http://localhost:4500/generatepin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPins[i]), // Send one pin at a time
                });

                console.log('Response:', response);

                if (!response.ok) {
                    throw new Error('Failed to generate pin');
                }
            }

            fetchPins(); // Refresh the list of pins
        } catch (error) {
            console.error('Error generating pins:', error);
        }
    };

    const fetchPins = async () => {
        try {
            console.log('Fetching pins...');
            const response = await fetch('http://localhost:4500/pins');
            const data = await response.json();
            console.log('Fetched pins:', data);
            setPins(data);
        } catch (error) {
            console.error('Error fetching pins:', error);
        }
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <main className="p-4">
                <div className="main-heading mb-4">
                    <h2>Pin Generate</h2>
                </div>

                <div className="container mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="mb-3 col-lg-3">
                                <label htmlFor="plan" className="form-label">Plan</label>
                                <input type="text" className="form-control" id="plan" value="Annual Subscription" readOnly />
                            </div>
                            <div className="mb-3 col-lg-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input type="text" className="form-control" id="amount" value="2000" readOnly />
                            </div>
                            <div className="mb-3 col-lg-3">
                                <label htmlFor="numPins" className="form-label">Number of Pins</label>
                                <input type="number" className="form-control" id="numPins" value="3" readOnly />
                            </div>
                            <div className="col-lg-3">
                                <button type="submit" className="btn btn-primary mt-5">Generate Pins</button>
                            </div>
                        </div>
                    </form>

                    <h3 className="mt-5">All Pins</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Pin</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pins.map((pin, index) => (
                                <tr key={index}>
                                    <td>{pin.plan}</td>
                                    <td>{pin.pin}</td>
                                    <td>{pin.amount}</td>
                                    <td>{pin.status}</td>
                                    <td>{new Date(pin.date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default GeneratePin;

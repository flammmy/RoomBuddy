import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Common/Sidebar';

const TransferPin = () => {
    
    const [pins, setPins] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({}); // Store user selection per pin

    useEffect(() => {
        fetchPins();
        fetchAdminUsers();
    }, []);

    const fetchPins = async () => {
        try {
            const response = await fetch('http://localhost:4500/pins');
            const data = await response.json();
            console.log('Fetched pins:', data);
            setPins(data);
        } catch (error) {
            console.error('Error fetching pins:', error);
        }
    };

    const fetchAdminUsers = async () => {
        try {
            const response = await fetch('http://localhost:4500/viewusers');
            const data = await response.json();
            console.log('Fetched users:', data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching admin users:', error);
        }
    };

    const handleTransfer = async (pin) => {
        const user = selectedUser[pin._id];
        if (!user) return;

        try {
            const response = await fetch(`http://localhost:4500/transferpin/${pin._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transfer_to: user, status: '2' }),
            });

            if (response.ok) {
                console.log('Pin transferred successfully');
                fetchPins();
            } else {
                console.error('Failed to transfer pin');
            }
        } catch (error) {
            console.error('Error transferring pin:', error);
        }
    };

    const handleUnsend = async (pin) => {
        try {
            const response = await fetch(`http://localhost:4500/transferpin/${pin._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transfer_to: '', status: '1' }),
            });

            if (response.ok) {
                console.log('Pin unsent successfully');
                fetchPins();
            } else {
                console.error('Failed to unsend pin');
            }
        } catch (error) {
            console.error('Error unsending pin:', error);
        }
    };

    const handleSelectUser = (pinId, username) => {
        setSelectedUser(prevState => ({ ...prevState, [pinId]: username }));
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <main className="p-4">
                <div className="main-heading mb-4">
                    <h2>Transfer Pins</h2>
                </div>

                <div className="container mt-5">
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Plan</th>
                                <th>Pin</th>
                                <th>Status</th>
                                <th>Transfer To</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pins.map(pin => (
                                <tr key={pin._id} className={pin.status === '0' ? 'bg-success text-white' : ''}>
                                    <td>{pin.plan}</td>
                                    <td>{pin.pin}</td>
                                    <td>{pin.status}</td>
                                    <td>
                                        {pin.status === '1' ? (
                                            <select
                                                className="form-select"
                                                value={selectedUser[pin._id] || ''}
                                                onChange={(e) => handleSelectUser(pin._id, e.target.value)}
                                            >
                                                <option value="">Select Admin User</option>
                                                {users.map(user => (
                                                    <option key={user._id} value={user.username}>
                                                        {user.username}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : pin.status === '2' ? (
                                            pin.transfer_to
                                        ) : (
                                            'Waiting to be used'
                                        )}
                                    </td>
                                    <td>
                                        {pin.status === '1' ? (
                                            <button className="btn btn-primary" onClick={() => handleTransfer(pin)}>
                                                Transfer
                                            </button>
                                        ) : pin.status === '2' ? (
                                            <button className="btn btn-warning" onClick={() => handleUnsend(pin)}>
                                                Unsend
                                            </button>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default TransferPin;

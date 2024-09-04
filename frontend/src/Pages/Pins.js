// PinTable.js

import React from 'react';

const PinTable = ({ pins }) => {
    return (
        <div>
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
    );
};

export default PinTable;

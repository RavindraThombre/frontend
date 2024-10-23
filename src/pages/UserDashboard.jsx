// src/components/UserDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        // Fetch stores list for the user dashboard
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/stores');
                setStores(res.data.stores);
            } catch (error) {
                console.error('Error fetching user dashboard data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
            <div>
                <h2 className="text-xl font-semibold mb-4">Registered Stores</h2>
                <ul className="list-disc pl-6">
                    {stores.map((store, index) => (
                        <li key={index}>
                            {store.name} - {store.address} - Overall Rating: {store.rating}/5
                            <button className="ml-4 p-2 bg-blue-500 text-white rounded-lg">
                                Rate Store
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Add additional normal user functionalities here */}
        </div>
    );
};

export default UserDashboard;

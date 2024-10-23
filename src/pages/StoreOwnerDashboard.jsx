// src/components/OwnerDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnerDashboard = () => {
    const [users, setUsers] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        // Fetch data for store owner dashboard
        const fetchData = async () => {
            try {
                const ratingsRes = await axios.get('http://localhost:5000/store/ratings'); // Fetch users who submitted ratings
                const avgRatingRes = await axios.get('http://localhost:5000/store/average-rating'); // Fetch average rating

                setUsers(ratingsRes.data.users);
                setAverageRating(avgRatingRes.data.averageRating);
            } catch (error) {
                console.error('Error fetching store owner dashboard data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Store Owner Dashboard</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Average Store Rating</h2>
                <p className="text-2xl">{averageRating}</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Users who rated your store</h2>
                <ul className="list-disc pl-6">
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.rating}/5
                        </li>
                    ))}
                </ul>
            </div>
            {/* Add additional store owner functionalities here */}
        </div>
    );
};

export default OwnerDashboard;

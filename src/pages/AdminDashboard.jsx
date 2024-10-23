// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalStores, setTotalStores] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);

    useEffect(() => {
        // Fetch data for the admin dashboard
        const fetchData = async () => {
            try {
                const usersRes = await axios.get('http://localhost:5000/users/count');
                const storesRes = await axios.get('http://localhost:5000/stores/count');
                const ratingsRes = await axios.get('http://localhost:5000/ratings/count');

                setTotalUsers(usersRes.data.count);
                setTotalStores(storesRes.data.count);
                setTotalRatings(ratingsRes.data.count);
            } catch (error) {
                console.error('Error fetching admin dashboard data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Total Users</h2>
                    <p className="text-2xl">{totalUsers}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Total Stores</h2>
                    <p className="text-2xl">{totalStores}</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Total Ratings Submitted</h2>
                    <p className="text-2xl">{totalRatings}</p>
                </div>
            </div>
            <div className="mt-8">
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={() => window.location.href = '/admin/add-user'}>
                    Add User
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 ml-4 rounded" onClick={() => window.location.href = '/admin/add-store'}>
                    Add Store
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;

// src/components/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        role: 'Normal User', // default to normal user
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users/add', formData);
            alert('User added successfully');
            setFormData({
                name: '',
                email: '',
                password: '',
                address: '',
                role: 'Normal User',
            });
        } catch (error) {
            console.error('Error adding user', error);
        }
    };

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="Normal User">Normal User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;

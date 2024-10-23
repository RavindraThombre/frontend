// src/components/ListStores.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListStores = () => {
    const [stores, setStores] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const res = await axios.get('http://localhost:5000/stores');
                setStores(res.data);
            } catch (error) {
                console.error('Error fetching stores', error);
            }
        };

        fetchStores();
    }, []);

    const filteredStores = stores.filter((store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.rating.toString().includes(searchTerm)  // If rating filter is numeric
    );

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Stores List</h1>
            <input
                type="text"
                className="w-full mb-4 p-2 border rounded"
                placeholder="Search by name, email, address, or rating"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStores.map((store) => (
                        <tr key={store.id}>
                            <td className="border px-4 py-2">{store.name}</td>
                            <td className="border px-4 py-2">{store.email}</td>
                            <td className="border px-4 py-2">{store.address}</td>
                            <td className="border px-4 py-2">{store.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListStores;

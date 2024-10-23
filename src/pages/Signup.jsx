// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Reset error and success messages before a new attempt
        setError('');
        setSuccess('');

        // Basic form validation
        if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
            return setError('Password must be 8-16 characters, with at least 1 uppercase and 1 special character.');
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                name,
                email,
                address,
                password,
                role: 'Normal User', // Hardcoded role for normal user
            });

            setSuccess('User registered successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
        } catch (err) {
            setError('Error signing up. Please check your details and try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            maxLength="60"
                            minLength="20"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            maxLength="400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="8"
                            maxLength="16"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                {/* "Already registered? Please login" message */}
                <div className="mt-6 text-center">
                    <p className="text-sm">
                        Already registered?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Please login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

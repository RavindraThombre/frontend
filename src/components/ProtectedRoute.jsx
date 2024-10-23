// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem('user')); // Assuming user role is stored in localStorage after login

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;

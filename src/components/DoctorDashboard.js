import React from 'react';
import { useLocation } from 'react-router-dom';

const DoctorDashboard = () => {
    const location = useLocation();
    const userData = location.state;

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white">Doctor Dashboard</h2>
                <p className="text-slate-300">Welcome, {userData.firstName} {userData.lastName}</p>
                <p className="text-slate-300">Username: {userData.username}</p>
                <p className="text-slate-300">Email: {userData.email}</p>
            </div>
        </div>
    );
};

export default DoctorDashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        profilePicture: null,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        addressLine1: '',
        city: '',
        state: '',
        pincode: '',
        userType: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        const userData = {
            firstName: form.firstName,
            lastName: form.lastName,
            username: form.username,
            email: form.email
        };

        if (form.userType === 'patient') {
            navigate('/patient_dashboard', { state: userData });
        } else if (form.userType === 'doctor') {
            navigate('/doctor_dashboard', { state: userData });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-white text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="file" name="profilePicture" accept="image/*" onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="email" name="email" placeholder="Email Id" value={form.email} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="addressLine1" placeholder="Address Line 1" value={form.addressLine1} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <input type="text" name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white placeholder-slate-400" required />
                    <select name="userType" value={form.userType} onChange={handleChange} className="mb-4 p-3 border border-slate-600 rounded w-full bg-slate-700 text-white">
                        <option value="" className="text-slate-400">Select User Type</option>
                        <option value="patient" className="text-slate-900">Patient</option>
                        <option value="doctor" className="text-slate-900">Doctor</option>
                    </select>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;

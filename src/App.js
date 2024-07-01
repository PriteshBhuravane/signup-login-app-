import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignupForm />} />
                <Route path="/patient_dashboard" element={<PatientDashboard />} />
                <Route path="/doctor_dashboard" element={<DoctorDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

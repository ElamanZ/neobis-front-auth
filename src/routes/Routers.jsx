import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import LoggedInPage from "../pages/LoggedInPage/LoggedInPage.jsx";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/loggedIn" element={<LoggedInPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};

export default Routers;
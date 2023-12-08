import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import LoggedInPage from "../pages/LoggedInPage/LoggedInPage.jsx";
import SendMessagePage from "../pages/SendMessagePage/SendMessagePage.jsx";
import WelcomPage from "../pages/WelcomPage/WelcomPage.jsx";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage.jsx";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/loggedIn" element={<LoggedInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/send-message" element={<SendMessagePage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="/welcom" element={<WelcomPage />} />
        </Routes>
    );
};

export default Routers;
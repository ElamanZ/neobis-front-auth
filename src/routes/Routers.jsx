import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import SendMessagePage from "../pages/SendMessagePage/SendMessagePage.jsx";
import WelcomePage from "../pages/WelcomPage/WelcomePage.jsx";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage.jsx";


const Routers = () => {
    const navigate = useNavigate()
    const [userLogged, setUserLogged] = useState({
        currentUser: null
    })

    const login = ({email, password}) => {
        setUserLogged({
            ...userLogged,
            currentUser: {
                email,
                password
            }
        })
    }

    const logout = () => {
        setUserLogged({
            ...userLogged,
            currentUser: null

        })
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage login={login}/>} />
            <Route path="/loggedIn" element={<WelcomePage logout={logout} currentUser={userLogged.currentUser} text='С возвращением!' />} />
            <Route path="/register" element={<RegisterPage login={login}/>} />
            <Route path="/send-message" element={<SendMessagePage currentUser={userLogged.currentUser}/>} />
            <Route path="/confirm" element={<ConfirmPage currentUser={userLogged.currentUser}/>} />
            <Route path="/welcome" element={<WelcomePage currentUser={userLogged.currentUser} logout={logout} text='Добро пожаловать!'/>} />
        </Routes>
    );
};

export default Routers;
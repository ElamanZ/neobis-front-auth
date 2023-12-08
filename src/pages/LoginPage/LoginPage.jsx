import React, {useState} from 'react';
import stayAtHome from '../../assets/images/Stay at home.svg'
import styles from './loginPage.module.scss'
import eyeIcon from "../../assets/images/eyeIcon.svg";
import eyeIconNoVisib from "../../assets/images/eyeIconVisib.svg";
import {Link, useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from '../../store/authSlice';

import {useDispatch} from "react-redux";

function LoginPage(props) {

    const notification = () => toast.error("Не верный логин или пароль!")

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const inputType = showPassword ? 'text' : 'password';
    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async () => {
        // Создание объекта, который будет передан в signIn
        const signInData = {
            username: username, // Значение из инпута для email
            password: password, // Значение из инпута для password
        };

        try {
            const response = await dispatch(signIn(signInData));

            if (response.payload.status === 200) {
                navigate('/loggedIn');
                console.log('Logged In Successfully');
            } else {
                notification();
            }
        } catch (error) {
            notification()
        }
    };


    return (
        <div className="container">
            <div className={styles.loginBlock}>
                <div className={styles.loginBlock__image}>
                    <img src={stayAtHome} alt="stay-at-home logo"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                    <div className={styles.loginBlock__welcom}>
                        <h2>Вэлком бэк!</h2>
                            <input
                                type="text"
                                placeholder="Введи туда-сюда логин"
                                className={styles.inputLogin}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className={styles.inputPasswordBlock}>
                                <input
                                    type={inputType}
                                    placeholder='Пароль (тоже введи)'
                                    className={styles.inputPassword}
                                    onChange={handleChange}
                                    value={password}
                                />
                                <img
                                    src={showPassword ? eyeIcon : eyeIconNoVisib}
                                    alt="eyeIcon"
                                    onClick={togglePasswordVisibility}
                                    className={styles.inputImg}
                                />
                            </div>
                            <button className={styles.button} onClick={handleLogin}>
                                Войти
                            </button>

                            <Link to='/register'>
                                <p>У меня еще нет аккаунта</p>
                            </Link>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            closeOnClick
                            hideProgressBar={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            style={{
                                right: '18em',
                                width: '343px',
                                height: '54px',
                            }}
                        />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
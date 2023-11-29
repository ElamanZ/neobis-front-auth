import React from 'react';
import stayAtHome from '../../assets/images/Stay at home.svg'
import styles from './loginPage.module.scss'
import Input from "../../components/UI/Input/input.jsx";
import InputPassword from "../../components/UI/inputPassword/inputPassword.jsx";
import Button from "../../components/UI/button/button.jsx";
import {Link} from "react-router-dom";
function LoginPage(props) {
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
                    <div className={styles.input}>
                        <Input placeholder="Введи туда-сюда логин"/>
                    </div>

                    <InputPassword placeholder="Пароль (тоже введи)"/>
                    <div className={styles.button}>
                        <Button buttonText="Войти"/>
                    </div>

                    <Link to='/register'>
                        <p>У меня еще нет аккаунта</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
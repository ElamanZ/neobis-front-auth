import React from 'react';
import stayAtHome from "../../assets/images/Stay at home.svg";
import styles from "../LoginPage/loginPage.module.scss";
import stylesTwo from "../RegisterPage/registerPage.module.scss";
import BackBtn from "../../components/UI/backBtn/backBtn.jsx";
import Input from "../../components/UI/Input/input.jsx";
import InputPassword from "../../components/UI/inputPassword/inputPassword.jsx";
import Button from "../../components/UI/button/button.jsx";

function RegisterPage(props) {
    return (
        <div className='container'>
            <div className={stylesTwo.registerBlock}>
                <div className={styles.loginBlock__image}>
                    <img src={stayAtHome} alt="stay-at-home logo"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <div className={stylesTwo.registerBlock__right}>
                    <div className={stylesTwo.registerBlock__backBtn}>
                        <BackBtn/>
                    </div>
                    <div className={stylesTwo.registerBlock__createAcc}>
                        <h2>Создать аккаунт <br/>Lorby</h2>
                        <Input placeholder="Введи адрес почты"/>
                        <Input placeholder="Придумай логин"/>
                        <InputPassword placeholder="Создай пароль"/>
                        <InputPassword placeholder="Повтори пароль"/>
                        <Button buttonText="Далее" disabled={true}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterPage;
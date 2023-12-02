import React, {useState} from 'react';
import stayAtHome from "../../assets/images/Stay at home.svg";
import styles from "../RegisterPage/registerPage.module.scss";
import BackBtn from "../../components/UI/backBtn/backBtn.jsx";
import { useForm } from "react-hook-form";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import eyeIconNoVisib from "../../assets/images/eyeIconVisib.svg";
import {Link} from "react-router-dom";

function RegisterPage(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = watch('password', '');
    const passwordConfirmation = watch('passwordConfirmation', '');

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibilitySecond = () => {
        setShowPasswordSecond(!showPasswordSecond);
    };

    const passwordInputType = showPassword ? 'text' : 'password';
    const passwordInputTypeSecond = showPasswordSecond ? 'text' : 'password';

    const isValidLength = password.length >= 8 && password.length <= 15;
    const hasLowerAndUpper = /(?=.*[a-zа-я])(?=.*[A-ZА-Я])/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const isPasswordMatch = password === passwordConfirmation;

    const isPasswordValid = () => {
        return isValidLength && hasLowerAndUpper && hasNumber && hasSpecialChar && isPasswordMatch;
    };

    return (
        <div className='container'>
            <div className={styles.registerBlock}>
                <div className={styles.registerBlock__image}>
                    <img src={stayAtHome} alt="stay-at-home logo"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <div className={styles.registerBlock__right}>
                    <div className={styles.registerBlock__backBtn}>
                        <BackBtn/>
                    </div>
                    <div className={styles.registerBlock__createAcc}>
                        <h2>Создать аккаунт <br/>Lorby</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerBlock__form}>
                            <div style={{ marginTop: '48px', marginBottom: '14px'}}>
                                <input {...register('email')} type="email" placeholder="Введи адрес почты" className={styles.inputReg}/>
                            </div>
                            <input {...register('login')} placeholder="Придумай логин" className={styles.inputReg}/>
                            <div className={styles.inputPasswordBlock}>

                                <input
                                    {...register('password')}
                                    placeholder="Создай пароль"
                                    className={styles.inputPassword}
                                    type={passwordInputType}

                                />
                                <img
                                    src={showPassword ? eyeIcon : eyeIconNoVisib}
                                    alt="eyeIcon"
                                    onClick={togglePasswordVisibility}
                                    className={styles.inputImg}
                                />
                            </div>
                            <ul className={styles.inputvalidation}>
                                <li style={{ color: !isValidLength && password !== "" ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray' }}>
                                    От 8 до 15 символов
                                </li>
                                <li style={{ color: !hasLowerAndUpper && password !== "" ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray' }}>
                                    Строчные и прописные буквы
                                </li>
                                <li style={{ color: !hasNumber && password !== "" ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray' }}>
                                    Минимум 1 цифра
                                </li>
                                <li style={{ color: !hasSpecialChar && password !== "" ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray' }}>
                                    Минимум 1 спецсимвол (!, ", #, $...)
                                </li>
                            </ul>

                            <div className={styles.inputPasswordBlock}>
                                <input
                                    {...register('passwordConfirmation')}
                                    placeholder="Повтори пароль"
                                    className={styles.inputPassword}
                                    type={passwordInputTypeSecond}
                                />

                                <img
                                    src={showPasswordSecond ? eyeIcon : eyeIconNoVisib}
                                    alt="eyeIcon"
                                    onClick={togglePasswordVisibilitySecond}
                                    className={styles.inputImg}
                                />
                            </div>


                            <button disabled={!isPasswordValid() || password !== passwordConfirmation}
                                    className={!isPasswordValid() || password !== passwordConfirmation? styles.buttonDisabled : styles.button}
                                    type="submit"
                            >
                                <Link to="/confirm">
                                    Войти
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterPage;
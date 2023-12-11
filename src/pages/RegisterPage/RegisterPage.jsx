import React, {useState} from 'react';
import stayAtHome from "../../assets/images/Stay at home.svg";
import styles from "../RegisterPage/registerPage.module.scss";
import BackBtn from "../../components/UI/backBtn/backBtn.jsx";
import { useForm } from "react-hook-form";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import eyeIconNoVisib from "../../assets/images/eyeIconVisib.svg";
import {useDispatch} from "react-redux";
import { registerUser } from '../../store/authSlice.js';
import { useNavigate } from 'react-router-dom';

function RegisterPage({login}) {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();




    const onSubmit = async (data) => {
        const userData = {
            email: data.email,
            username: data.login,
            password: data.password,
        };
        try {
            const isUserNameValid = usernameRegex.test(data.login);

            if (!isUserNameValid) {
                return alert('Логин не должен состоять только из символов!');

            }

            const actionResult = await dispatch(registerUser(userData));
            const { payload } = actionResult;

            if (registerUser.fulfilled.match(actionResult)) {
                login(userData)
                navigate('/send-message');
                localStorage.setItem('userData', JSON.stringify(userData));
                console.log("Всё ок", userData);
            } else {
                console.error('Данная почта уже зарегистрирована:', payload);
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
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
    const usernameRegex = /[a-zA-Z0-9]+/
    const isPasswordValid = () => {
        return isValidLength && hasLowerAndUpper && hasNumber && hasSpecialChar && isPasswordMatch;
    };

    const btnStyleConst = !isPasswordValid() || password !== passwordConfirmation
    const checkValid = (validName) => {
        return !validName && password !== "" ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray'
    }

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
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="Введи адрес почты"
                                    className={styles.inputReg}

                                />
                            </div>
                            <input
                                {...register('login',)}
                                placeholder="Придумай логин"
                                className={styles.inputReg}
                            />
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
                            <ul className={styles.inputValidation}>
                                <li style={{ color: checkValid(isValidLength)}}>
                                    От 8 до 15 символов
                                </li>
                                <li style={{ color: checkValid(hasLowerAndUpper)}}>
                                    Строчные и прописные буквы
                                </li>
                                <li style={{ color: checkValid(hasNumber)}}>
                                    Минимум 1 цифра
                                </li>
                                <li style={{ color: checkValid(hasSpecialChar)}}>
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


                            <button disabled={btnStyleConst}
                                    className={btnStyleConst? styles.buttonDisabled : styles.button}
                                    type="submit"
                            >
                                Далeе

                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterPage;
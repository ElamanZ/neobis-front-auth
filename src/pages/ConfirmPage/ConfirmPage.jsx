import React, { useEffect } from 'react';
import loadingGif from '../../assets/images/loadingGif1.gif';
import styles from '../SendMessagePage/SendMessagePage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirm } from '../../store/authSlice';

function ConfirmPage(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

        console.log(token)
        if (token) {
            dispatch(confirm(token))
                .then((response) => {
                    // Перенаправление на страницу /welcome при успешном подтверждении
                    if (response.payload && response.payload.success) {
                        navigate('/welcome');
                    } else {
                        // Обработка ошибки и вывод на страницу
                        alert('Ошибка при подтверждении регистрации');
                    }
                })
                .catch((error) => {
                    alert('Ошибка при отправке запроса');
                    console.error(error);
                });
        }
    }, [dispatch, navigate, location.search]);

    return (
        <div className="container">
            <div className={styles.loading}>
                <img src={loadingGif} alt="loadingGif" />
            </div>
        </div>
    );
}

export default ConfirmPage;

import React, { useEffect } from 'react';
import loadingGif from '../../assets/images/loadingGif1.gif';
import styles from '../SendMessagePage/SendMessagePage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirm } from '../../store/authSlice';

function ConfirmPage({currentUser}) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

        if (token) {
            dispatch(confirm({ token, navigate }));
        }
        if (!currentUser) {
            navigate('/login')
        }

    }, [location.search, currentUser]);
    return (
        <div className="container">
            <div className={styles.loading}>
                <img src={loadingGif} alt="loadingGif" />
            </div>
        </div>
    );
}

export default ConfirmPage;

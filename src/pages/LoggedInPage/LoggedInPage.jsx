import React from 'react';
import stayAtHomeIcon from '../../assets/images/Stay at home.svg'
import styles from '../LoggedInPage/loggedInPage.module.scss'
import {Link} from "react-router-dom";
function LoggedInPage(props) {
    return (
        <div className="container">
            <div className={styles.loggedIn}>
                <h2>С возвращением!</h2>
                <p>Lorby - твой личный репетитор</p>
                <img src={stayAtHomeIcon} alt="stayAtHomeIcon"/>
                <Link to='/login'>
                    <p className={styles.loggedIn__exit}>Выйти</p>
                </Link>
            </div>
        </div>
    );
}

export default LoggedInPage;
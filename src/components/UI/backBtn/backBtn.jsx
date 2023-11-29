import React from 'react';
import {Link} from "react-router-dom";
import backIcon from '../../../assets/images/backIcon.svg'
import styles from '../backBtn/backBtn.module.scss'
function BackBtn(props) {
    return (
        <div className={styles.backBtn}>
            <Link to='/login'>
                <img src={backIcon} alt="backIcon" className={styles.backBtn_img}/>
            </Link>
            <Link to='/login'>Назад</Link>
        </div>
    );
}

export default BackBtn;
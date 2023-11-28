import React from 'react';
import styles from '../Input/input.module.scss'

function Input(props) {

    return (
        <>
            <input type="email" placeholder={props.placeholder} className={styles.input}/>
        </>
    );
}

export default Input;
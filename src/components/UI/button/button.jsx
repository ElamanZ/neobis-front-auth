import React from 'react';
import styles from '../button/button.module.scss'
function Button(props) {
    const { buttonText } = props;
    const disabeled = true
    return (
        <>
            <button className={disabeled ? styles.buttonGray : styles.button}>
                {buttonText}
            </button>
        </>
    );
}

export default Button;
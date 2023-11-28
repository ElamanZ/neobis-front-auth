import React from 'react';
import styles from '../button/button.module.scss'
function Button(props) {
    const { buttonText } = props;
    return (
        <>
            <button className={styles.button}>
                {buttonText}
            </button>
        </>
    );
}

export default Button;
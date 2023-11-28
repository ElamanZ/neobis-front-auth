import React, { useState } from 'react';
import styles from './inputPassword.module.scss';
import eyeIcon from '../../../assets/images/eyeIcon.svg';
import eyeIconNoVisib from '../../../assets/images/eyeIconVisib.svg';

function InputPassword(props) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const inputType = showPassword ? 'text' : 'password';
    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.inputPasswordBlock}>
            <input
                type={inputType}
                placeholder={props.placeholder}
                className={styles.inputPassword}
                onChange={handleChange}
                value={password}
            />
            <img
                src={showPassword ? eyeIcon : eyeIconNoVisib}
                alt="eyeIcon"
                onClick={togglePasswordVisibility}
                className={styles.inputImg}
            />
        </div>
    );
}

export default InputPassword;

import React, { useState, useEffect } from 'react';
import styles from "./SendMessagePage.module.scss";
import stayAtHome from "../../assets/images/Stay at home.svg";
import BackBtn from "../../components/UI/backBtn/backBtn.jsx";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
function SendMessagePage(props) {
    const [open, setOpen] = useState(false);


    const [timer, setTimer] = useState(60);
    const [canClick, setCanClick] = useState(false);

    useEffect(() => {
        let interval;

        interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval);
                    setCanClick(true);
                    return prevTimer;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [canClick]);

    const handleOpen = () => {
        console.log('Письмо не пришло');
        setCanClick(false);
        setTimer(60);
    };


    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 375,
        height: 300,
        borderRadius: 10,
        bgcolor: '#FFFFFF',
        boxShadow: 24,
        p: 4,
        fontFamily: 'M PLUS 1p, sans-serif'

};

    return (
        <div className='container'>
            <div className={styles.confirmBlock}>
                <div className={styles.confirmBlock__image}>
                    <img src={stayAtHome} alt="stay-at-home logo"/>
                    <h1>Lorby</h1>
                    <p>Твой личный репетитор</p>
                </div>
                <div className={styles.confirmBlock__right}>
                    <div className={styles.confirmBlock__backBtn}>
                        <BackBtn/>
                    </div>
                    <div className={styles.confirmBlock__createAcc}>
                        <h3>Выслали письмо со ссылкой для завершения регистрации на {'ex@mail'}</h3>
                        <p>Если письмо не пришло, не спеши ждать совиную почту - лучше <b>проверь ящик “Спам”
                            <br/><br/>
                            (´｡• ω •｡`)</b>
                        </p>
                        <div>
                            {canClick ? (
                                <button onClick={handleOpen}>Письмо не пришло</button>
                            ) : (
                                <p>Подождите {timer} сек</p>
                            )}
                        </div>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className={styles.modalBlock}>
                            <h3>Мы выслали еще одно письмо на указанную тобой почту {'exampleEmail'}</h3>
                            <p>Не забудь проверить<br/>
                                ящик “Спам”!!!!!!!</p>
                            <button onClick={handleClose}>Понятно!!!</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default SendMessagePage;

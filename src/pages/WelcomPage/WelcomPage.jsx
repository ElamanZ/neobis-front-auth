import React from 'react';
import styles from "../WelcomPage/welcomPage.module.scss";
import stayAtHomeIcon from "../../assets/images/Stay at home.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {Link} from "react-router-dom";

function WelcomPage(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
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
        fontFamily: 'M PLUS 1p, sans-serif',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <div className="container">
            <div className={styles.welcom}>
                <h2>Добро пожаловать!</h2>
                <p>Lorby - твой личный репетитор</p>
                <img src={stayAtHomeIcon} alt="stayAtHomeIcon"/>
                <button
                    onClick={handleOpen}
                    className={styles.btnNoBorder}
                >
                    Выйти
                </button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalBlock}>
                        <h3>Выйти?</h3>
                        <p>Точно выйти?</p>
                        <button className={styles.btnBlack}> <Link to={'/login'}>Да, точно</Link></button>
                        <button onClick={handleClose} className={styles.btnNoBorder}>Нет, остаться</button>
                    </div>
                </Box>
            </Modal>

        </div>
    );
}

export default WelcomPage;
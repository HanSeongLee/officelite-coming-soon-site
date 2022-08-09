import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';
import OpenCountdown from '../OpenCountdown';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <OpenCountdown theme={'dark'} />
                <Button className={styles.button}>
                    Get Started
                </Button>
            </Container>
        </footer>
    );
};

export default Footer;

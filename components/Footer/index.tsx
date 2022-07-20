import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import CountdownContainer from '../../containers/CountdownContainer';
import Button from '../Button';

const Footer: React.FC = () => {
    const date = new Date('2022-11-04');
    const formatter = new Intl.DateTimeFormat('fr', { dateStyle: 'medium' });

    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Coming <span className={styles.highlight}>
                        {formatter.format(date).replace('.', '')}
                    </span>
                </h2>
                <CountdownContainer className={styles.countdown}
                                    date={date}
                />
                <Button>
                    Get Started
                </Button>
            </Container>
        </footer>
    );
};

export default Footer;

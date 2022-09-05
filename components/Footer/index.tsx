import React, {useCallback} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';
import OpenCountdown from '../OpenCountdown';
import {useRouter} from 'next/router';

const Footer: React.FC = () => {
    const route = useRouter();

    const onClick = useCallback(() => {
        route.push('/sign-up');
    }, [route]);

    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <OpenCountdown theme={'dark'}/>
                <Button className={styles.button}
                        onClick={onClick}
                >
                    Get Started
                </Button>
            </Container>
        </footer>
    );
};

export default Footer;

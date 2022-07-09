import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from '../Container';
import Logo from '../Logo';

const Header: React.FC<HTMLAttributes<HTMLHeadElement>> = ({className, ...props}) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo/>
            </Container>
        </header>
    );
};

export default Header;

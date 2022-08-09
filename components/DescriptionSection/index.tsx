import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import cn from 'classnames';
import OpenCountdown from '../OpenCountdown';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const DescriptionSection: React.FC<IProps> = ({ title, description, className, ...props }) => {
    return (
        <section className={cn(styles.descriptionSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <OpenCountdown />
            </Container>
        </section>
    );
};

export default DescriptionSection;

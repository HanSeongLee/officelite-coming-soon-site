import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from '../Container';
import Button from '../Button';

const HeroSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <picture>
                    <img className={styles.banner}
                         src={'/img/home/illustration-charts.svg'}
                         alt={''}
                    />
                </picture>
                <h2 className={styles.title}>
                    A simple solution to complex tasks is coming soon
                </h2>
                <p className={styles.description}>
                    Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
                    collaboration platform built with an intuitive interface to improve productivity.
                </p>
                <Button>
                    Get Started
                </Button>
            </Container>
        </section>
    );
};

export default HeroSection;

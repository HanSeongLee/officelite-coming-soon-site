import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import {Plan} from '../../types/plan';
import Button from '../Button';
import cn from 'classnames';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    plan: Plan;
}

const PlanCard: React.FC<IProps> = ({ plan, className, ...props }) => {
    const {
        name, description, price, options,
        href,
    } = plan;

    return (
        <div className={cn(styles.planCard, className)}
             {...props}
        >
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.price}>
                {price === 0 ? 'Free' : `$${price}`}
            </div>
            <div className={styles.description}>
                {description}
            </div>

            <ul className={styles.optionContainer}>
                {options?.map((option, index) => (
                    <li key={index}>
                        {option}
                    </li>
                ))}
            </ul>

            <Link href={href}>
                <a className={styles.linkButton}>
                    Try for Free
                </a>
            </Link>
        </div>
    );
};

export default PlanCard;

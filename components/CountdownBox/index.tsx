import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import {Time} from '../../types/time';
import {defaultTime} from '../../types/constants';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    time: Time;
}

const CountdownBox: React.FC<IProps> = ({ time, className, ...props }) => {
    const {days, hours, min, sec} = time;

    return (
        <ul className={cn(styles.countdownBox, className)}
            {...props}
        >
            <li className={styles.card}>
                <div className={styles.time}>
                    {days.toString().padStart(2, '0')}
                </div>
                <div className={styles.unit}>
                    days
                </div>
            </li>
            <li className={styles.card}>
                <div className={styles.time}>
                    {hours.toString().padStart(2, '0')}
                </div>
                <div className={styles.unit}>
                    hours
                </div>
            </li>
            <li className={styles.card}>
                <div className={styles.time}>
                    {min.toString().padStart(2, '0')}
                </div>
                <div className={styles.unit}>
                    min
                </div>
            </li>
            <li className={styles.card}>
                <div className={styles.time}>
                    {sec.toString().padStart(2, '0')}
                </div>
                <div className={styles.unit}>
                    sec
                </div>
            </li>
        </ul>
    );
};

CountdownBox.defaultProps = {
    time: defaultTime,
};

export default CountdownBox;

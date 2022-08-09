import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import CountdownContainer from '../../containers/CountdownContainer';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    theme?: 'light' | 'dark';
}

const OpenCountdown: React.FC<IProps> = ({ theme, className, ...props }) => {
    const date = new Date('2022-11-04');
    const formatter = new Intl.DateTimeFormat('fr', {dateStyle: 'medium'});

    return (
        <div className={cn(styles.openCountdown, {
            [styles.light]: theme === 'light',
            [styles.dark]: theme === 'dark',
        }, className)}
             {...props}
        >
            <h2 className={styles.title}>
                Coming <span className={styles.highlight}>
                        {formatter.format(date).replace('.', '')}
                    </span>
            </h2>
            <CountdownContainer className={styles.countdown}
                                date={date}
            />
        </div>
    );
};

OpenCountdown.defaultProps = {
    theme: 'light',
};

export default OpenCountdown;

import React, {HTMLAttributes, useEffect, useState} from 'react';
import CountdownBox from '../../components/CountdownBox';
import Countdown from './Countdown';
import {Time} from '../../types/time';
import {defaultTime} from '../../types/constants';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    date: Date;
}

const CountdownContainer: React.FC<IProps> = ({ date, ...props }) => {
    const [remainTime, setRemainTime] = useState<Time>(defaultTime);
    const countdown = new Countdown(date);

    useEffect(() => {
        setRemainTime(countdown.getTimeRemaining());
        const interval = setInterval(() => {
            setRemainTime(countdown.getTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div {...props}>
            <CountdownBox time={remainTime} />
        </div>
    );
};

export default CountdownContainer;

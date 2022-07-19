import {Time} from '../../types/time';
import {defaultTime} from '../../types/constants';

class Countdown {
    private target: Date;

    constructor(target: Date) {
        this.target = target;
    }

    public getTimeRemaining(): Time {
        const now = Date.now();
        const diff = (this.target.getTime() - now) / 1000;

        if (diff <= 0) {
            return defaultTime;
        }

        const days = Math.floor(diff / (3600 * 24));
        const hours = Math.floor((diff - (days * (3600 * 24))) / 3600);
        const min = Math.floor((diff - (days * (3600 * 24)) - (hours * 3600)) / 60);
        const sec = Math.floor(diff - (days * (3600 * 24)) - (hours * 3600) - (min * 60));

        return {
            days,
            hours,
            min,
            sec,
        };
    }
}

export default Countdown;

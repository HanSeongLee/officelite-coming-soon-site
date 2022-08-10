import React, {InputHTMLAttributes, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<IProps> = ({ className, ...props }) => {
    const [error, setError] = useState(false);
    const onInvalid = (e: any) => {
        setError(!e.currentTarget.validity.valid);
    };

    const onChange = (e: any) => {
        setError(false);
    };

    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        }, className)}>
            <input className={styles.input}
                   onInvalid={onInvalid}
                   onChange={onChange}
                   {...props}
            />
        </div>
    );
};

export default Input;

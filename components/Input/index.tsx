import React, {forwardRef, InputHTMLAttributes, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = forwardRef<HTMLInputElement, IProps>(({onChange, className, ...props}, ref) => {
    const [error, setError] = useState(false);
    const onInvalid = (e: any) => {
        setError(!e.currentTarget.validity.valid);
    };

    const onPreChange = (e: any) => {
        setError(false);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        }, className)}>
            <input className={styles.input}
                   onInvalid={onInvalid}
                   onChange={onPreChange}
                   {...props}
                   ref={ref}
            />
        </div>
    );
});

export default Input;

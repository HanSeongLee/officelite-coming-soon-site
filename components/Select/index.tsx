import React, {forwardRef, HTMLAttributes, useCallback, useState} from 'react';
import styles from './style.module.scss';
import {Option} from '../../types/option';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    options: Option[];
}

const Select = forwardRef<HTMLInputElement, IProps>(({ id, name, options, className }, ref) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onItemClick = useCallback((e, index) => {
        e.stopPropagation();
        setSelected(index);
        setOpen(false);
    }, []);

    return (
        <div className={cn(styles.select, {
            [styles.open]: open,
        }, className)}
             onClick={toggleOpen}
        >
            <div className={styles.label}>
                {options?.length > 0 ? options[selected].label : ''}
            </div>

            <div className={styles.listWrapper}>
                <ul className={styles.list}>
                    {options?.map((option, index) => (
                        <li className={cn(styles.item, {
                            [styles.checked]: selected === index,
                        })}
                            onClick={(e) => onItemClick(e, index)}
                            key={index}
                        >
                            <div className={styles.label}>
                                {option.label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <input type={'hidden'}
                   name={name}
                   value={options?.length > 0 ? options[selected].value : ''}
                   ref={ref}
            />
        </div>
    );
});

export default Select;

import React, {FormHTMLAttributes} from 'react';
import styles from './style.module.scss';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import cn from 'classnames';
import {UseFormRegister} from 'react-hook-form/dist/types/form';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    register: UseFormRegister<any>
}

const ContactForm: React.FC<IProps> = ({ register, className, ...props }) => {
    return (
        <form className={cn(styles.contactForm, className)}
              {...props}
        >
            <Input type={'text'}
                   placeholder={'Name'}
                   required
                   {...register('name')}
            />
            <Input type={'email'}
                   placeholder={'Email Address'}
                   required
                   {...register('email')}
            />
            <Select options={[
                        {
                            label: (
                                <>
                                    Basic Pack
                                    <span className={styles.price}>
                                        Free
                                    </span>
                                </>
                            ),
                            value: 0,
                        },
                        {
                            label: (
                                <>
                                    Pro Pack
                                    <span className={styles.price}>
                                        $9.99
                                    </span>
                                </>
                            ),
                            value: 1,
                        },
                        {
                            label: (
                                <>
                                    Ultimate Pack
                                    <span className={styles.price}>
                                        $19.99
                                    </span>
                                </>
                            ),
                            value: 2,
                        }
                    ]}
                    {...register('plan')}
            />
            <Input type={'tel'}
                   placeholder={'Phone Number'}
                   required
                   {...register('phone')}
            />
            <Input type={'text'}
                   placeholder={'Company'}
                   required
                   {...register('company')}
            />
            <Button className={styles.submitButton}>
                Got on the list
            </Button>
        </form>
    );
};

export default ContactForm;

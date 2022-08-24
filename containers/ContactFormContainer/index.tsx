import React, {FormHTMLAttributes, useCallback} from 'react';
import ContactForm from '../../components/ContactForm';
import {useForm} from 'react-hook-form';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {

}

const ContactFormContainer: React.FC<IProps> = ({ ...props }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback((data) => {
        // TODO: Should be implemented here.
        alert('Thank you for submitting!');
    }, []);

    return (
        <ContactForm register={register}
                     onSubmit={handleSubmit(onSubmit)}
                     {...props}
        />
    );
};

export default ContactFormContainer;

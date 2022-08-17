import React, {useCallback} from 'react';
import ContactForm from '../../components/ContactForm';
import {useForm} from 'react-hook-form';

const ContactFormContainer: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback((data) => {
        // TODO: Should be implemented here.
        alert('Thank you for submitting!');
    }, []);

    return (
        <ContactForm register={register}
                     onSubmit={handleSubmit(onSubmit)}
        />
    );
};

export default ContactFormContainer;

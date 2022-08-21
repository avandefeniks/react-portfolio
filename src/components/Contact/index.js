import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    const [email, setEmail] = useState('');
    const [userName, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        const inputType = e.target.name;
        const inputValue = e.target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }

    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        // setFormState({ name: '', email: '', message: '' });
        setName('');
        setMessage('');
        setEmail('');
    }


    return (
        <section className='contact-form'>
            <h2 id='contact'>Contact me</h2>
            <h6>This form is currently under construction. Please contact me at <a href="mailto:angelj.vandefeniks@gmail.com">
                angelj.vandefeniks@gmail.com</a></h6>
            <form id='contact-form'>
                <div>
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <input type="text" /*defaultValue={name}*/ onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                </div>
                <div>
                    {<input type="email" /*defaultValue={email}*/ name="email" onBlur={handleChange} />}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                </div>
                <div>
                    <textarea name="message" /*defaultValue={message}*/ onBlur={handleChange} rows="5" cols='23' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
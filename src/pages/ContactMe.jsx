import Form from 'react-bootstrap/Form';
import './ContactMe.css';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactInfo() {
    const [info, setInfo] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = info;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleValidation (event) {
        event.preventDefault();
        if (!validateEmail(event.target.value)) {
            setErrorMessage('Please add a valid email address');
        } else {
            setErrorMessage('');
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted!')
      }

    return (
        <Form>
            <Form.Group className="all-form" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name here" />
            </Form.Group>
            <Form.Group className="all-form" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Email address</Form.Label>
                <Form.Control type="email" onChange={handleValidation} placeholder="name@example.com" />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </Form.Group>
            <Form.Group className="all-form" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='form-label'>Message</Form.Label>
                <Form.Control id="text-area" as="textarea" rows={3} />
            </Form.Group>
            <button id='submit-form' onSubmit={handleSubmit} >Submit</button>
        </Form>
    )
}

export default ContactInfo;
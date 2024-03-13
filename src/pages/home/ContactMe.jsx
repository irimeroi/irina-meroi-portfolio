import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactInfo() {
    const [info, setInfo] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = info;
    const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);
    
    function handleValidation (event) {
        event.preventDefault();
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]:value
        })
        
        if (!validateEmail(event.target.value)) {
            setErrorMessage('Please enter a valid email address');
        } else {
            setErrorMessage('');
        }
    }

    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
      }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} id="contact" >
            <Form.Group className="pt-2" controlId="exampleForm.ControlInput1">
                <Form.Label className='pt-4'>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name here" name="name" required />
                <Form.Control.Feedback type='invalid' className='text-white text-end'>Please fill out this field!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="pt-2" controlId="exampleForm.ControlInput1">
                <Form.Label className='pt-4'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handleValidation} required/>
                {errorMessage && <p className="error-message ">{errorMessage}</p>}
                <Form.Control.Feedback type='invalid' className='text-white text-end'>Please fill out this field!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="pt-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='pt-4'>Message</Form.Label>
                <Form.Control className='text-area' as="textarea" name="message" rows={3} required/>
                <Form.Control.Feedback type='invalid' className='text-white text-end'>Please fill out this field!</Form.Control.Feedback>
            </Form.Group>
            <button id='submit-form' className='btn rounded text-white' type='submit'>Submit</button>
        </Form>
    )
}

export default ContactInfo;
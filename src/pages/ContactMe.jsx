import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactInfo() {
    const [info, setInfo] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = info;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleValidation (event) {
        event.preventDefault();
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]:value
        })
        
        if (!validateEmail(event.target.value)) {
            setErrorMessage('Please add a valid email address');
        } else {
            setErrorMessage('');
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (info.name && info.email && info.message) {
            window.location.reload();
        } else {
            alert('Please fill out all fields')
        }
      }

    return (
        <Form>
            <Form.Group className="pt-2" controlId="exampleForm.ControlInput1">
                <Form.Label className='pt-4'>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name here" name="name" onChange={handleValidation} />
            </Form.Group>
            <Form.Group className="pt-2" controlId="exampleForm.ControlInput1">
                <Form.Label className='pt-4'>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={handleValidation} placeholder="name@example.com" />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </Form.Group>
            <Form.Group className="pt-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='pt-4'>Message</Form.Label>
                <Form.Control className='text-area' as="textarea" name="message" onChange={handleValidation} rows={3} />
            </Form.Group>
            <button id='submit-form' onClick={handleSubmit} >Submit</button>
        </Form>
    )
}

export default ContactInfo;
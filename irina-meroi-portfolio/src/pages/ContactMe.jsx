import Form from 'react-bootstrap/Form';
import './ContactMe.css'

function ContactInfo() {
    return (
        <Form>
            <Form.Group className="all-form" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name here" />
            </Form.Group>
            <Form.Group className="all-form" controlId="exampleForm.ControlInput1">
                <Form.Label className='form-label'>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="all-form" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='form-label'>Message</Form.Label>
                <Form.Control id="text-area" as="textarea" rows={3} />
            </Form.Group>
            <button type='submit'>Submit</button>
        </Form>
    )
}

export default ContactInfo;
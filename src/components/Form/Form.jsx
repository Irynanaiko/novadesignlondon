import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.scss';

function Forms() {
    return (
        <div className='form'>
            <div className='form-container'>
                <Form className='form-fields'>
                    <h3 className='form-title'>request a quote</h3>

                    <Form.Group className="mb-3 p-0 form-control-sm  opacity-50" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 p-0 form-control-sm opacity-50" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3 p-0 form-control-sm  opacity-50" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3 p-0 form-control-sm opacity-50" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>

                    <Form.Group className="mb-3 p-0 form-control-sm opacity-50" controlId="formBasicEmail">
                        <Form.Control as="textarea" type="text" placeholder="About project" />
                    </Form.Group>
                    <Button className='w-100 text-uppercase' variant="dark">Submit</Button>
                </Form>
            </div>

            <div className='f-text'>
                WE COVER ALL AREAS IN AND AROUND GREATER LONDON
            </div>

        </div>

    )
}

export { Forms };
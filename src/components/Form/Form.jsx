import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.scss';

function Forms() {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-lg-5 f-container">
            <div className="f-info-container align-self-md-start">
                <div className="f-info">WE COVER ALL AREAS IN AND AROUND GREATER LONDON</div>
            </div>
            <Form className="form">
                <h3 className="form-title">request a quote</h3>

                <Form.Group className="mb-3 p-0 form-control-sm" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" className="opacity-75" />
                </Form.Group>

                <Form.Group className="mb-3 p-0 form-control-sm" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className="opacity-75" />
                </Form.Group>

                <Form.Group className="mb-3 p-0 form-control-sm" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Phone" className="opacity-75" />
                </Form.Group>

                <Form.Group className="mb-3 p-0 form-control-sm" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Address" className="opacity-75" />
                </Form.Group>

                <Form.Group className="mb-3 p-0 form-control-sm" controlId="formBasicEmail">
                    <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="About project"
                        className="opacity-75"
                    />
                </Form.Group>
                <Button className="w-100 text-uppercase" variant="dark">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export { Forms };

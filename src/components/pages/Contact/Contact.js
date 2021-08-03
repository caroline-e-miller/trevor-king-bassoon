import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Contact.css";

function Contact() {
    return (
        <Container id="contact-container">
            <p>For questions, comments, gigs, and lesson inquiries, please feel free to reach out!</p>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
  </Button>
            </Form>
        </Container>
    )
}

export default Contact;
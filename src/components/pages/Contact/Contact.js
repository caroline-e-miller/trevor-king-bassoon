import React from "react";
import FadeIn from 'react-fade-in';
import { Form, Button, Container, Card } from "react-bootstrap";
import "./Contact.css";

function Contact() {
    return (
        <Container id="contact-container">
            <FadeIn>
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

                <Card>
                    <Card.Img src="https://imgur.com/FxSRCXZ.jpeg"></Card.Img>
                </Card>
            </FadeIn>
        </Container>
    )
}

export default Contact;
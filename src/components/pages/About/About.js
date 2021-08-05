import React from 'react';
import FadeIn from 'react-fade-in';
import { Card, Container, Row, Image } from 'react-bootstrap';
import "./About.css"

function About() {
    return (
        <Container>
            <FadeIn>
                <Row>

                    <Card>

                        <h1>About Trevor</h1>
                        <p>
                            Trevor King grew up in Ann Arbor Michigan, and attended the University of Michigan for his undergraduate degree. After meeting his partner, Caroline Miller, at the University of Texas at Austin, they decided together to move back to Ann Arbor. It's an awesome place.
    </p>
                    </Card>

                </Row>

                <Row>
                    <Image src="https://livability.com/sites/default/files/AnnArbor-DowntownLibertySt.jpg" fluid />
                </Row>
            </FadeIn>
        </Container>


    )
}

export default About;
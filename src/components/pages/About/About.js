import React from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <Row>
                <Jumbotron>
                    <Container>

                        <h1>About Trevor</h1>
                        <p>
                            Trevor King grew up in Ann Arbor Michigan, and attended the University of Michigan for his undergraduate degree. After meeting his partner, Caroline Miller, at the University of Texas at Austin, they decided together to move back to Ann Arbor. It's an awesome place.
    </p>
                    </Container>
                </Jumbotron>
            </Row>

            <Row>
                <Image src="https://livability.com/sites/default/files/AnnArbor-DowntownLibertySt.jpg" fluid />
            </Row>
        </Container>


    )
}

export default About;
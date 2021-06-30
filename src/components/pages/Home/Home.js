import React from "react";
import { Container, Jumbotron, Image } from 'react-bootstrap';

function Home() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Trevor King</h1>
                <p>
                    A bassoonist who is passionate about chamber music, new music, and pedagogy.
    </p>
            </Container>
            <Image src="https://nafme.org/wp-content/uploads/2017/10/iStock-508853205.jpg" fluid />
        </Jumbotron>

    )
}

export default Home;
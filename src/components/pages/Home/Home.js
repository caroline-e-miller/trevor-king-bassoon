import React from "react";
import { Container, Jumbotron, Image } from 'react-bootstrap';
import "./Home.css";

function Home() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Trevor King</h1>
                <p>
                    A bassoonist who is passionate about chamber music, new music, and pedagogy.
    </p>
                <Image style={{ alignSelf: 'center' }} src="https://nafme.org/wp-content/uploads/2017/10/iStock-508853205.jpg" fluid />
            </Container>
        </Jumbotron>

    )
}

export default Home;
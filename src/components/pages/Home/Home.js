import React from "react";
import FadeIn from 'react-fade-in';
import { Container, Jumbotron, Image, Card } from 'react-bootstrap';
import "./Home.css";

function Home() {
    return (
        //         <Card>
        //     <Card.Body>
        //       <Card.Text>
        //         Some quick example text to build on the card title and make up the bulk
        //         of the card's content.
        //       </Card.Text>
        //     </Card.Body>
        //     <Card.Img variant="bottom" src="holder.js/100px180" />
        //   </Card>
        <Container>
            <FadeIn>
                <Card id="fade-in">

                    <h1>Trevor King</h1>
                    <Card.Text>
                        A bassoonist who is passionate about chamber music, new music, and pedagogy.
    </Card.Text>
                    <Card.Img variant="bottom" style={{ alignSelf: 'center' }} src="https://nafme.org/wp-content/uploads/2017/10/iStock-508853205.jpg" />

                </Card>
            </FadeIn>
        </Container>

    )
}

export default Home;
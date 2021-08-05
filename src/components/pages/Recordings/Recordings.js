import React from "react";
import { Carousel } from "react-bootstrap";
import "./Recordings.css"

function Recordings() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    id="photo1"
                    className="d-block w-100"
                    src="https://www.mccmf.org/wp-content/uploads/2015/07/William-King.jpg"
                    alt="poulenc"
                />
                <Carousel.Caption>
                    <h3 id="recording-text">Poulenc Trio for Bassoon, Oboe, and Piano</h3>
                    <p id="recording-text">Performed with Nancy Amrobse King (oboe) and Monika Ellis (piano).</p>
                    <a href="https://youtu.be/q3DLKRg4M68">Link to performance here (begins at 7:45)</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://4.bp.blogspot.com/-J71XnIB-tvU/Tq71__i0rqI/AAAAAAAABb0/UCxw6bZKGtA/s400/Isang+Yun.jpg"
                    alt="yoon"
                />

                <Carousel.Caption>
                    <h3 id="recording-text">Yun Monolgue for Solo Bassoon</h3>
                    <p id="recording-text">[link here]</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cantaloupemusic.com/sites/default/files/styles/artist_slides/public/artistimages/steve_reich_photo_credit_jeffrey_herman.jpg?itok=xQD4gPfU.jpg"
                    alt="Reich New York Counterpoint"
                />

                <Carousel.Caption>
                    <h3 id="recording-text">Reich New York Couterpoint for Bassoon</h3>
                    <p id="recording-text">[link here]</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Recordings;
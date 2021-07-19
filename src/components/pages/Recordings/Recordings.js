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
                    <h3>Poulenc Trio for Bassoon, Oboe, and Piano</h3>
                    <p>Performed with Nancy Amrobse King (oboe) and Monika Ellis (piano).</p>
                    <p>[link here]</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://4.bp.blogspot.com/-J71XnIB-tvU/Tq71__i0rqI/AAAAAAAABb0/UCxw6bZKGtA/s400/Isang+Yun.jpg"
                    alt="yoon"
                />

                <Carousel.Caption>
                    <h3>Yun Monolgue for Solo Bassoon</h3>
                    <p>[link here]</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Reich New York Counterpoint"
                />

                <Carousel.Caption>
                    <h3>Reich New York Couterpoint for Bassoon</h3>
                    <p>[link here]</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Recordings;
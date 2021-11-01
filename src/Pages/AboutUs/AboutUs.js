import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        // About Us Have Picture & Details
        <div>
            <div className="container my-5">
                <h1 className="text-center my-5">About us</h1>

                <Row xs={1} sm={1} md={1} lg={2} className="gy-5">
                    <Col>
                        <img
                            className="w-100"
                            src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
                            alt=""
                        />
                    </Col>
                    <Col>
                        <h3>For Our Travellers Thinking</h3>
                        <p>
                            We believe that traveling around the world shouldn’t be hard: it’s actually something everyone should be able to do at least once in their lives. Whether you choose to spend a few years or just a couple months traveling this beautiful planet, it’s important to see what’s out there. It’s up to you to make the dream come true and take the first step. Launch TripPlanner to piece together and price your ideal route. Not sure where to start?  You can always call one of our travel consultants and get some complimentary advice!
                        </p>
                        <h3 className="mt-5">Travels Mean Adventure</h3>
                        <p>
                            Zip-lining over the jungle canopy in Peru, successfully navigating the maze-like streets of Venice, bartering for the best price in the traditional markets of Marrakech, taking a speedboat ride in Overall, or hopping in a Land Rover and heading out to watch animals grazing  in Tanzania: these are adventures worth having. People are hardwired for the excitement of adventure and travel may just be the best way to tap into it.
                        </p>

                    </Col>
                </Row>

                <Row xs={1} sm={1} md={1} lg={2} className="gy-5 my-5">
                    <Col>
                        <h3>Why We travel</h3>
                        <p>
                            We travel, initially, to lose ourselves; and we travel, next, to find ourselves. We travel to open our hearts and eyes and learn more about the world than our newspapers will accommodate. We travel to bring what little we can, in our ignorance and knowledge, to those parts of the globe whose riches are differently dispersed. And we travel, in essence, to become young fools again — to slow time down and get taken in, and fall in love once more. The beauty of this whole process was best described, perhaps, before people even took to frequent flying, by George Santayana in his lapidary essay, “The Philosophy of Travel.” We “need sometimes,” the Harvard philosopher wrote, “to escape into open solitudes, into aimlessness, into the moral holiday of running some pure hazard, in order to sharpen the edge of life, to taste hardship, and to be compelled to work desperately for a moment at no matter what.”
                        </p>
                        <h3 className="mt-5">We are Alltime travellers</h3>
                        <p>
                            We are here together, and we need to live together with tolerance and respect. We must become global citizens. Our only boundaries are the way we see ourselves. The only borders, the way we see each other…

                            Let us fight for every woman and every man to have the opportunity to live healthy, secure lives, full of opportunity and love. We are all time-travellers, journeying together into the future. But let us work together to make that future a place we want to visit. Be brave, be determined, overcome the odds. It can be done.
                        </p>

                    </Col>
                    <Col>
                        <img
                            className="w-100"
                            src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/7bb747525e62d065d1014758cf4b4cab4e0e5d9f/big-c31d34c7f59ffedf917a6ecf557f4537.jpg"
                            alt=""
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutUs;

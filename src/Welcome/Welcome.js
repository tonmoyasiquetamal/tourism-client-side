import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
    return (
        // Welcome Contain Image Link & Short Details For Displaying User
        <div>
            <div className="container my-5">
                <div className="text-center about-heading  pt-5">
                    <h2>
                        Welcome To <span>The Developer Tour'</span>
                    </h2>
                    <p>The best institution to explore the world!</p>
                </div>
                <div className="about-container">
                    <Row lg={2} md={2} sm={1} xs={1} className="g-5">
                        <Col>
                            <img
                                className="about-img"
                                src="https://previews.123rf.com/images/seasheepdesigns/seasheepdesigns2003/seasheepdesigns200300022/143661996-air-travel-luggage-airplane-passport-vector-set-vintage-style-suitcase-and-tickets-cute-graphic-illu.jpg"
                                alt=""
                            />
                        </Col>
                        <Col>
                            <div className="about-text">
                                <h3>To the world of an incredible vacation</h3>
                                <p>
                                    Traveling Improves Your Health. From cutting down on stress, to lowering your chances of developing a heart disease, the health benefits of traveling are huge. You may stay sitting on a chair all day long at the workplace: including some walking to your trip is sure to make your body feel better.
                                </p>
                                <Link to="/aboutus">
                                    <Button className="common-btn3 mt-4">Learn More</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

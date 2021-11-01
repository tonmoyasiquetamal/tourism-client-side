import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoFooter from "../../../img/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-primary text-light">
            {/* Footer Information */}
            <Container className="py-5 footer-text">
                <Row className="gy-5">
                    <Col md={3}>
                        <div>
                            <img style={{ width: "90%" }} src={logoFooter} alt="logo"></img>
                            <p className="py-4">
                            </p>
                            <Button variant="link" className="btn common-btn">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4 className="mb-4">Recent Update</h4>
                        <div className="d-flex">
                            <div className="d-flex flex-row flex-md-column flex-lg-row">
                                <img
                                    className="footer-img"
                                    style={{ height: "70px", marginRight: "15px" }}
                                    src=""
                                    alt=""
                                />
                                <div>
                                    <p
                                        style={{
                                            color: "#999",
                                            fontSize: ".8rem",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        31st October, 2021
                                    </p>
                                    <h6>Smoke-free—a healthy body fit to tour</h6>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <div className="d-flex flex-row flex-md-column flex-lg-row">
                                <img
                                    style={{ height: "70px", marginRight: "15px" }}
                                    src=""
                                    alt=""
                                />
                                <div>
                                    <p
                                        style={{
                                            color: "#999",
                                            fontSize: ".8rem",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        5th November, 2021
                                    </p>
                                    <h6>By there is a way, if there is a will</h6>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex flex-row flex-md-column flex-lg-row">
                                <img
                                    style={{ height: "70px", marginRight: "15px" }}
                                    src=""
                                    alt=""
                                />
                                <div>
                                    <p
                                        style={{
                                            color: "#999",
                                            fontSize: ".8rem",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        1st December, 2021
                                    </p>
                                    <h6>Up To Date for Enjoying Yourself With Healty Tour</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer-links">
                            <div>
                                <h4 className="mb-4">Quick Links</h4>
                            </div>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <div>
                                <h4 className="mb-4">Contact Us</h4>
                            </div>
                            <div className="mb-3">
                                <p>Address:</p>
                                <p>60 Feet Paka Mosjid, Mirpur Dhaka - 1216, Bangladesh</p>
                            </div>
                            <div className="mb-3">
                                <p>Phone:</p>
                                <p>+8801517******</p>
                            </div>
                            <div className="mb-3">
                                <p>Email:</p>
                                <p className="mail">
                                    <a href="mailto:tonmoyasiquetamal.cse@gmail.com">tonmoyasiquetamal.cse@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Copyright Info */}
            <div className="footer-bg">
                <Container className="my-3">
                    <Row>
                        <Col className="d-flex justify-content-center my-3">
                            <li>
                                <Link to="/home">
                                    <i className="fab fa-facebook-f px-3"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home">
                                    <i className="fab fa-twitter px-3"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home">
                                    <i className="fab fa-linkedin-in px-3"></i>
                                </Link>
                            </li>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <p style={{ fontSize: "20px", color: "#red" }}>
                                    All Right Reserved By Developer Tour | Copyright Ⓒ 2021
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;

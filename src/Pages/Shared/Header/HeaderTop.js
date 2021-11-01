import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderTop.css";

const HeaderTop = () => {
    // Header Top Row, Col Using For Showing Short Contact Details
    return (
        <div className="top-header">
            <Container>
                <Row className="py-2">
                    <Col lg={4}>
                        <div className="d-flex">
                            <i className="far fa-clock me-2 py-1"></i>
                            <p className="header-top-text">24/7 Per Day</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="d-flex">
                            <i className="fas fa-phone-alt me-2 py-1"></i>
                            <p className="header-top-text">+88098522002142</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="d-flex">
                            <i className="fas fa-thumbtack me-2 py-1"></i>
                            <p className="header-top-text">60 Feet Paka Mosjid, Mirpur, Dhaka-1216</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderTop;

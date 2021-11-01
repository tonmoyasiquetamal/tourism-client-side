import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

// All Data Loaded From Services
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://intense-lowlands-74894.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            {/* Showing All Services */}
            <Container className="text-center my-5 contain">
                <h1 className="my-5 pt-5 ">Our Services</h1>
                <Row md={2} lg={3} sm={2} xs={1} className="gy-5 ">
                    {services.map((service) => (
                        <Col key={service._id}>
                            <Service service={service}></Service>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;

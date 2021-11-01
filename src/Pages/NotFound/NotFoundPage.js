import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../../img/404.png";

const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <img className="img-100 my-5 mx-2" src={notFound} alt="Error- 404" />
                    <Link to="/home">
                        <Button variant="link" className="common-btn mb-5">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

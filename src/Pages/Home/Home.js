import React from "react";
import Welcome from "../../Welcome/Welcome";
import CarouselSlider from "./CarouselSlider/CarouselSlider";
import ServicesForHome from "./ServicesForHome";

const Home = () => {
    return (
        // Incoming 3 Route
        <div>
            <CarouselSlider></CarouselSlider>
            <Welcome></Welcome>
            <ServicesForHome></ServicesForHome>
        </div>
    );
};

export default Home;

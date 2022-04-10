// COMPONENTS
import React from "react";
import HalfScreen from "./HalfScreen";
import Pointer from "./Pointer";

// STYLES
import "./styles/Home.css";

// DATA
import { HALF_FRONTEND, HALF_DESIGN } from "../constants/Data";

export const Home = () => {
    return (
        <div className="home-container">
            <Pointer />
            <HalfScreen data={HALF_FRONTEND} />
            <HalfScreen data={HALF_DESIGN} />
        </div>
    );
};

export default Home;

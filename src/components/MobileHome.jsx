// COMPONENTS
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// STYLES
import "./styles/MobileHome.css";

const MobileHome = () => {
    const [history] = useState(useHistory());
    const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
    const [currentMargin, setCurrentMargin] = useState();

    // Click Handler
    const handleClick = (where) => {
        switch (where) {
            case "about":
                history.push({
                    pathname: "/about",
                });
                break;
            case "development":
                history.push({
                    pathname: "/developer",
                    state: { type: "left" },
                });
                break;
            case "designer":
                history.push({
                    pathname: "/designer",
                    state: { type: "right" },
                });
                break;
            default:
                break;
        }
    };

    const getHeight = () => {
        setCurrentHeight(window.innerHeight);
        getMargin();
    };

    const getMargin = () => {
        const name = document.getElementsByClassName("name-mobile");
        const nameWidth = name[0].clientHeight / 2;
        const newMargin = currentHeight / 2 - nameWidth;
        setCurrentMargin(newMargin);
    };

    useEffect(() => {
        getHeight();
        getMargin();
        window.addEventListener("resize", () => getHeight());
        return () => window.removeEventListener("resize", getHeight);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className="mobile-container"
            style={{ height: `${currentHeight}px` }}
        >
            <div
                className="name-mobile"
                style={{ marginTop: `${currentMargin}px` }}
            >
                <h1 className="name-mobile-text">ALEXIS TOLEDO</h1>
                <button
                    className="about-mobile"
                    onClick={() => handleClick("about")}
                >
                    ABOUT
                </button>
            </div>
            <div
                className="dev-half"
                onClick={() => handleClick("development")}
            >
                <div className="title-mobile">
                    <h2 className="title-mobile-text">
                        Development
                        <br />
                        Portfolio
                    </h2>
                </div>
            </div>
            <div className="divider"></div>
            <div className="des-half" onClick={() => handleClick("designer")}>
                <div className="title-mobile">
                    <h2 className="title-mobile-text">
                        Graphic Design
                        <br />
                        Portfolio
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MobileHome;

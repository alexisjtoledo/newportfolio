// COMPONENTS
import React from "react";
import {
    LogoHtml5,
    LogoCss3,
    LogoJavascript,
    LogoNodejs,
    LogoReact,
    LogoFirebase,
    LogoGithub,
    LogoSass,
    LogoPython,
} from "react-ionicons";

// SYTLES
import "./styles/Skill.css";

const Skill = ({ params }) => {
    const { type, color } = params;

    return (
        <div className="skill-container">
            <div className="skill"></div>
            <div className="label" style={{ backgroundColor: color }}>
                {type === "html" ? (
                    <LogoHtml5 width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "css" ? (
                    <LogoCss3 width="100%" height="100%" color="#E2E8E8" />
                ) : null}

                {type === "js" ? (
                    <LogoJavascript
                        width="100%"
                        height="100%"
                        color="#E2E8E8"
                    />
                ) : null}
                {type === "react" ? (
                    <LogoReact width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "firebase" ? (
                    <LogoFirebase width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "github" ? (
                    <LogoGithub width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "python" ? (
                    <LogoPython width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "node" ? (
                    <LogoNodejs width="100%" height="100%" color="#E2E8E8" />
                ) : null}
                {type === "sass" ? (
                    <LogoSass width="100%" height="100%" color="#E2E8E8" />
                ) : null}
            </div>
        </div>
    );
};

export default Skill;

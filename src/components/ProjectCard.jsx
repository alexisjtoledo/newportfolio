// COMPONENTS
import React, { Fragment } from "react";
import Slider from "./Slider";
import {
    PersonOutline,
    CalendarOutline,
    LogoGithub,
    LogoYoutube,
    LogoAppleAppstore,
    LogoGooglePlaystore,
    Open,
    LogoHtml5,
    LogoCss3,
    LogoJavascript,
    LogoNodejs,
    LogoReact,
    LogoFirebase,
} from "react-ionicons";

// STYLES
import "./styles/ProjectCard.css";

const ProjectCard = (props) => {
    const { projects, margin } = props;

    return (
        <Fragment>
            {projects.map((item) => (
                <Fragment key={item.id}>
                    <div
                        className="project-card"
                        style={{ marginLeft: margin, marginRight: margin }}
                    >
                        <div className="project-img">
                            <Slider
                                pictures={item.pictures}
                                quantity={item.picturesQuantity}
                            />
                        </div>
                        <div className="project-body">
                            <div className="project-title-container">
                                <h5 className="project-title">{item.name}</h5>
                                <div className="project-tech">
                                    <Technologies data={item.technologies} />
                                </div>
                            </div>
                            <div className="project-description">
                                <p className="project-description-text">
                                    {item.description}
                                </p>
                            </div>
                            <div className="project-extras">
                                {item.role ? (
                                    <Fragment>
                                        <div className="project-icon">
                                            <PersonOutline
                                                width="100%"
                                                height="100%"
                                                color="rgba(44,47,47,.9)"
                                            />
                                        </div>
                                        <p className="project-extras-text">
                                            <strong>Role:</strong> {item.role}
                                        </p>
                                    </Fragment>
                                ) : null}
                            </div>
                            <div className="project-extras">
                                {item.launchdate ? (
                                    <Fragment>
                                        <div className="project-icon">
                                            <CalendarOutline
                                                width="100%"
                                                height="100%"
                                                color="rgba(44,47,47,.9)"
                                            />
                                        </div>
                                        <p className="project-extras-text">
                                            <strong>Date:</strong>{" "}
                                            {item.launchdate}
                                        </p>
                                    </Fragment>
                                ) : null}
                            </div>
                            <div className="project-buttons">
                                <Buttons data={item.buttons} />
                            </div>
                        </div>
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export const Buttons = (props) => {
    const data = props.data;

    const handleClick = (e, link) => {
        e.stopPropagation();
        window.open(link, "_blank");
    };

    return (
        <Fragment>
            {data.map((item) => (
                <button
                    className={`project-btn ${item.style} ${item.type}`}
                    onClick={(e) =>
                        item.style === "disabled"
                            ? {}
                            : handleClick(e, item.link)
                    }
                    key={item.id}
                >
                    <div className="btn-icon-box">
                        <div className="btn-icon">
                            {item.type === "playstore" ? (
                                <LogoGooglePlaystore
                                    width="100%"
                                    height="100%"
                                    color="rgba(44,47,47,.7)"
                                />
                            ) : null}
                            {item.type === "appstore" ? (
                                <LogoAppleAppstore
                                    width="100%"
                                    height="100%"
                                    color="rgba(44,47,47,.3)"
                                />
                            ) : null}
                            {item.type === "video" ? (
                                <LogoYoutube
                                    width="100%"
                                    height="100%"
                                    color="rgba(44,47,47,.7)"
                                />
                            ) : null}
                            {item.type === "github" ? (
                                <LogoGithub
                                    width="100%"
                                    height="100%"
                                    color="rgba(44,47,47,.7)"
                                />
                            ) : null}
                            {item.type === "website" ? (
                                <Open
                                    width="100%"
                                    height="100%"
                                    color="rgba(44,47,47,.7)"
                                />
                            ) : null}
                        </div>
                    </div>
                    <p className="btn-label">{item.text}</p>
                </button>
            ))}
        </Fragment>
    );
};

export const Technologies = (props) => {
    const techs = props.data;

    return (
        <Fragment>
            {techs.map((item) =>
                item.used === false ? null : (
                    <div
                        className={`tech-box ${item.icon ? "icon" : ""}`}
                        style={{
                            backgroundColor:
                                item.id === "html"
                                    ? "#E54E26"
                                    : item.id === "css"
                                    ? "#0A6FB8"
                                    : item.id === "js"
                                    ? "#E7A52D"
                                    : item.id === "node"
                                    ? "#549E42"
                                    : item.id === "react"
                                    ? "#00D8FF"
                                    : item.id === "firebase"
                                    ? "#E88634"
                                    : "#2C2F2F",
                        }}
                        key={item.id}
                    >
                        {item.id === "html" ? (
                            <div className="tech-icon">
                                <LogoHtml5
                                    color="#E2E8E8"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "css" ? (
                            <div className="tech-icon">
                                <LogoCss3
                                    color="#E2E8E8"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "js" ? (
                            <div className="tech-icon">
                                <LogoJavascript
                                    color="#E2E8E8"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "node" ? (
                            <div className="tech-icon">
                                <LogoNodejs
                                    color="#E2E8E8"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "react" ? (
                            <div className="tech-icon">
                                <LogoReact
                                    color="#2C2F2F"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "firebase" ? (
                            <div className="tech-icon">
                                <LogoFirebase
                                    color="#E2E8E8"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        ) : null}
                        {item.id === "jquery" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#0668AC",
                                    color: "#E2E8E8",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "rnative" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#00D8FF",
                                    color: "#2C2F2F",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "php" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#757BB4",
                                    color: "#050606",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "flash" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#44211B",
                                    color: "#E0202D",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "mssql" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#CFD8DD",
                                    color: "#B50404",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "csharp" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#3E2E8C",
                                    color: "#E2E8E8",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "net" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#512BD4",
                                    color: "#E2E8E8",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "ai" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#2E0202",
                                    color: "#F39E38",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "ps" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#071E34",
                                    color: "#54A7F8",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "id" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#48021F",
                                    color: "#FF3466",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "xd" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#400A35",
                                    color: "#ED6FEF",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "pr" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#010657",
                                    color: "#979AF7",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                        {item.id === "ae" ? (
                            <div
                                className="tech-logo"
                                style={{
                                    backgroundColor: "#010657",
                                    color: "#989BF8",
                                }}
                            >
                                <p className="tech-logo-text">
                                    {item.showName}
                                </p>
                            </div>
                        ) : null}
                    </div>
                ),
            )}
        </Fragment>
    );
};

export default ProjectCard;

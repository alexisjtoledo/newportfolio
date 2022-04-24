// COMPONENTS
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProjectIndex from "./ProjectIndex";
import BackButton from "./BackButton";

const FrontEndIndex = () => {
    const [history] = useState(useHistory());
    const [type] = useState(history.location.state.type);

    return (
        <article>
            <BackButton />
            <ProjectIndex type={type} />
        </article>
    );
};

export default FrontEndIndex;

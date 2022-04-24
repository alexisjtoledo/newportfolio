// COMPONENTS
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProjectIndex from "./ProjectIndex";
import BackButton from "./BackButton";

const GDSectionIndex = () => {
    const [history] = useState(useHistory());
    const [which] = useState(history.location.state.which);
    const [type] = useState(history.location.state.type);

    return (
        <article>
            <BackButton />
            <ProjectIndex type={type} selected={which} />
        </article>
    );
};

export default GDSectionIndex;

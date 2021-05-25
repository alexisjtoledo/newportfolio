// COMPONENTS
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ProjectIndex from './ProjectIndex'
import BackButton from './BackButton'

const FrontEndIndex = props => {

    const [history] = useState(useHistory())
    const [type] = useState(history.location.state.type)

    return (
        <div>
            <BackButton />
            <ProjectIndex type={type}/>
        </div>
    )
}

export default FrontEndIndex
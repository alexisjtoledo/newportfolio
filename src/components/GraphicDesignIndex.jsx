// COMPONENTS
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from './BackButton'

// STYLES
import './styles/GraphicDesignIndex.css'

const GraphicDesignIndex = () => {

    const [history] = useState(useHistory())
    const [type] = useState(history.location.state.type)

    // Click Handler
    const clickHandler = section => {
        history.push({
            pathname: '/section', state: { which: section, type: type },
        })
    }

    return (
        <div className='index-container'>
            <BackButton />
            <button onClick={() => clickHandler('editorial')} className='section-button'>
                <h2 className="section-title">
                    Editorial Design
                </h2>
            </button>
            <button onClick={() => clickHandler('graphic')} className='section-button'>
                <h2 className="section-title">
                    Graphic Design
                </h2>
            </button>
            <button onClick={() => clickHandler('branding')} className='section-button'>
                <h2 className="section-title">
                    Branding
                </h2>
            </button>
            <button onClick={() => clickHandler('signage')} className='section-button'>
                <h2 className="section-title">
                    Signage Design
                </h2>
            </button>
            <button onClick={() => clickHandler('video')} className='section-button'>
                <h2 className="section-title">
                    Video and Animation
                </h2>
            </button>
        </div>
    )
}

export default GraphicDesignIndex
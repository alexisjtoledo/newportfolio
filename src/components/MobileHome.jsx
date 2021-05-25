// COMPONENTS
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// STYLES
import './styles/MobileHome.css'

const MobileHome = () => {

    const [history] = useState(useHistory())

    // Click Handler
    const handleClick = where => {
        switch (where) {
            case 'about':
                history.push({
                    pathname: '/about'
                })
                break;
            case 'development':
                history.push({
                    pathname: '/developer', 
                    state: { type: 'left' }
                })
                break;
            case 'designer':
                history.push({
                    pathname: '/designer', 
                    state: { type: 'right' }
                })
                break;
            default:
                break;
        }
    }

    return (
        <div className="mobile-container">
            <div className="name-mobile">
                <h1 className="name-mobile-text">
                    ALEXIS TOLEDO
                </h1>
                <button className="about-mobile" onClick={() => handleClick('about')} >
                    ABOUT
                </button>
            </div>
            <div className="dev-half" onClick={() => handleClick('development')}>
                <div className="title-mobile">
                    <h2 className="title-mobile-text">
                        Development<br />Portfolio
                    </h2>
                </div>
            </div>
            <div className="divider"></div>
            <div className="des-half" onClick={() => handleClick('designer')}>
                <div className="title-mobile">
                    <h2 className="title-mobile-text">
                        Graphic Design<br />Portfolio
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default MobileHome
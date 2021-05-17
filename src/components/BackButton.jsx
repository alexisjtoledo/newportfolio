/* COMPONENTS */
import React, { useState } from 'react'
import { ArrowBack, Home } from 'react-ionicons'
import { useHistory } from 'react-router-dom'

/* STYLES */
import './styles/BackButton.css'

const BackButton = () => {

    /**
     * States:
     * @mouseOver Records if the mouse is over the button or not.
     * @history Router navigation.
     */
    const [mouseOver, setMouseOver] = useState(false)
    const [history] = useState(useHistory())

    const onClick = e => {
        history.goBack()
        e.stopPropagation()
    }

    const mouseIn = () => {
        setMouseOver(true)
    }

    const mouseOut = () => {
        setMouseOver(false)
    }

    return (
        <div 
            className='backbtn-container'
            onMouseEnter={() => mouseIn()}
            onMouseLeave={() => mouseOut()}
            onClick={e => onClick(e)}
        >
            <div className={`back-arrow ${mouseOver ? 'mouseon' : ''}`}>
                <ArrowBack color='#2C2F2F' width='100%' height='100%' />
            </div>
            <div className="home-icon">
                <Home color='#2C2F2F' width='100%' height='100%' />
            </div>
        </div>
    )
}

export default BackButton
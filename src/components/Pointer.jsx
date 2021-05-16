/* COMPONENTS */
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

/* STYLES */
import './styles/Pointer.css'

/* IMAGES */
import cright from '../img/cursor-right.png'
import cleft from '../img/cursor-left.png'

const Pointer = () => {

    /**
     * States:
     * @position > current position of the pointer
     * @hidden > is the mouse out of the document?
     * @size > current size of the document
     */
    const [position, setPosition] = useState({x:0, y:0})
    const [hidden, setHidden] = useState(false)
    const [size, setSize] = useState(null)

    useEffect(() => {
        setSize(window.innerWidth)
        addEventListeners()
        return () => removeEventListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    /**
     * All the events I'm listening, if the mouse is moving and also if it leaves the document
     */
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseenter", onMouseEnter)
        document.addEventListener("mouseleave", onMouseLeave)
    }

    /**
     * Same but clearing the listeners.
     */
    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)
    }

    /**
     * If the mouse moves, I record the new position in the state. Also if the current document changes its size.
     * @param {object} e Event I'm getting from the listener.
     */
    const onMouseMove = (e) => {
        setSize(window.innerWidth) // Setting the new size of the window.
        setPosition({x: e.clientX, y: e.clientY}) // Setting the new position of my pointer.
    }

    /**
     *  If the mouse leaves the document I hide the pointer.
     */
    const onMouseLeave = () => {
        setHidden(true)
    }

    /**
     *  If the mouse comes back, it appears again.
     */
    const onMouseEnter = () => {
        setHidden(false)
    }

    /**
     *  Toggling the pointer classes when the hidden flag triggers.
     */
    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--hidden': hidden
        }
    )

    return (
        <img 
            src={position.x >= size/2 ? cright : cleft}
            alt="pointer" 
            className={cursorClasses} 
            style={{left: `${position.x}px`, top: `${position.y}px`}}
        />
    )
}

export default Pointer
import React, { useEffect, useState } from 'react'

import './styles/HalfScreen.css'

const HalfScreen = (props) => {


    const { style, title, name } = props.data

    

    return (
        <div className={`main-container ${style}`}>
            <h1 id='name' className={style}>{name}</h1>
            {
                style === 'left'
                    ? <button id="about" className="button">
                        ABOUT ME
                    </button>
                    : <button id="contact" className="button">
                        CONTACT ME
                    </button>
            }
            <h2 id='title' className={style}>{title}<br />Portfolio</h2>
        </div>
    )
}

export default HalfScreen
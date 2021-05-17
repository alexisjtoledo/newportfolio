/* COMPONENTS */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

/* STYLES */
import './styles/HalfScreen.css'

const HalfScreen = props => {

    const { style, title, name } = props.data

    /*   */
    const [transparent, setTransparent] = useState(false)
    const [history] = useState(useHistory())

    /* CLASSES TOGGLERS */
    const FadeIn = () => {
        setTransparent(true)
    }

    const FadeOut = () => {
        setTransparent(false)
    }

    /* BUTTONS FUNCTIONS */
    const MainClick = e => {
        e.type === 'left'
            ? history.push('/developer')
            : history.push('/designer')
    }

    const AboutClick = e => {
        history.push('/about')
        e.stopPropagation()
    }

    const ContactClick = e => {
        window.open('mailto:alexis.toledo@live.com', '_blank')
        e.stopPropagation()
    }

    return (
        /* MAIN CONTAINER */
        <div 
            className={`main-container ${style}`}
            onMouseEnter={() => FadeIn()}
            onMouseLeave={() => FadeOut()}
            onClick={() => MainClick({type: style})}
        >

            {/* NAME PART */}
            <h1 id='name' className={style}>{name}</h1>

            {/* CONTITIONAL: BUTTONS */}
            {
                style === 'left'
                    ? <button id="about" className="button" onClick={e => AboutClick(e)}>
                        ABOUT ME
                    </button>
                    : <button id="contact" className="button" onClick={e => ContactClick(e)}>
                        CONTACT ME
                    </button>
            }

            {/* TITLE CONTAINER */}
            <div className={`title-container ${transparent ? 'transparent' : ''} ${style}`}>

                {/* TITLE TEXT */}
                <h2 id='title' className={style}>{title}<br />Portfolio</h2>
            </div>

            {/* COVER */}
            <div className={`cover ${style} ${transparent ? 'transparent' : ''}`}></div>
        </div> 
    )
}

export default HalfScreen
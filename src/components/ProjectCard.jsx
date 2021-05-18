import React, { Fragment, useEffect, useState } from 'react'
import Slider from './Slider'
import './styles/ProjectCard.css'
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
} from 'react-ionicons'
import Pointer from './Pointer'

const ProjectCard = props => {

    const project = props.project
    const [margin, setMargin] = useState('')

    useEffect(() => {
        dinamicMargins(window.innerWidth)
        window.addEventListener('resize', e => {
            const newWidth = e.currentTarget.innerWidth
            dinamicMargins(newWidth)
        })
        return () => document.removeEventListener('resize', dinamicMargins)
    })

    const dinamicMargins = width => {
        const card = document.querySelector('.project-card')
        let cardWidth = getComputedStyle(card).width
        cardWidth = cardWidth.replace('px', '')
        const parsedCardWidth = parseInt(cardWidth, 0)
        const newMargin = ((width - parsedCardWidth) / 2)
        const parsedNewMargin = `${newMargin}px`
        setMargin(parsedNewMargin)
    }

    return (
        <Fragment>
            <Pointer />
            <div className='project-card' style={{marginLeft: margin, marginRight: margin }}>
                <div className="project-img">
                    <Slider pictures={project[0].pictures} quantity={project[0].picturesQuantity}/>
                </div>
                <div className="project-body">
                    <div className="project-title-container">
                        <h5 className='project-title'>{project[0].name}</h5>
                        <div className="project-tech">
                            <Technologies data={project[0].technologies} />
                        </div>
                        
                    </div>
                    <div className="project-description">
                        <p>{project[0].description}</p>
                    </div>
                    <div className="project-extras">
                        <div className="project-icon">
                            <PersonOutline width='100%' height='100%' color='rgba(44,47,47,.9)' />
                        </div>
                        <p className='project-extras-text'><strong>Role:</strong> {project[0].role}</p>
                    </div>
                    <div className="project-extras">
                        <div className="project-icon">
                            <CalendarOutline width='100%' height='100%' color='rgba(44,47,47,.9)' />
                        </div>
                        <p className='project-extras-text'><strong>Launch Date:</strong> {project[0].launchdate}</p>
                    </div>
                    <div className="project-buttons">
                        <Buttons data={project[0].buttons} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export const Buttons = props => {

    const data = props.data

    return(
        <Fragment>
            {
                data.map(item => 
                    <button 
                        className={`project-btn ${item.style} ${item.type}`} 
                        onClick={() => item.style === 'disabled' ? {} : window.open(item.link, '_blank')}
                        key={item.id}
                    >
                        <div className="btn-icon-box">
                            <div className="btn-icon">
                                {item.type === 'playstore' ? <LogoGooglePlaystore width='100%' height='100%' color='rgba(44,47,47,.7)' /> : null}
                                {item.type === 'appstore' ? <LogoAppleAppstore width='100%' height='100%' color='rgba(44,47,47,.3)' /> : null}
                                {item.type === 'video' ? <LogoYoutube width='100%' height='100%' color='rgba(44,47,47,.7)' /> : null}
                                {item.type === 'github' ? <LogoGithub width='100%' height='100%' color='rgba(44,47,47,.7)' /> : null}
                                {item.type === 'website' ? <Open width='100%' height='100%' color='rgba(44,47,47,.7)' /> : null}
                            </div>
                        </div>
                        <p className="btn-label">
                            {item.text}
                        </p>
                    </button>
                )
            }
        </Fragment>
    )
}

export const Technologies = props => {

    const techs = props.data

    return(
        <Fragment>
            {
                techs.map(item => item.used === false ? null 
                    : <div className={`tech-box ${item.icon ? 'icon' : ''}`} style={{ backgroundColor:item.color }} key={item.id}>
                        
                            {
                                item.id === 'html'
                                    ? <div className="tech-icon">
                                        <LogoHtml5 color='#E2E8E8' width='100%' height='100%' />
                                    </div>
                                    : null
                            }
                            {
                                item.id === 'css' 
                                    ? <div className="tech-icon">
                                        <LogoCss3 color='#E2E8E8' width='100%' height='100%' />
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'js' 
                                    ? <div className="tech-icon">
                                        <LogoJavascript color='#E2E8E8' width='100%' height='100%' />
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'node' 
                                    ? <div className="tech-icon">
                                        <LogoNodejs color='#E2E8E8' width='100%' height='100%' />
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'react' 
                                    ? <div className="tech-icon">
                                        <LogoReact color='#2C2F2F' width='100%' height='100%' />
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'firebase' 
                                    ? <div className="tech-icon">
                                        <LogoFirebase color='#E2E8E8' width='100%' height='100%' />
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'jquery' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'rnative' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'php' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'flash' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'mssql' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'csharp' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'net' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'ai' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'ps' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'id' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'xd' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'pr' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                            {
                                item.id === 'ae' 
                                    ? <div className='tech-logo' style={{backgroundColor: item.color, color: item.textColor}}>
                                        <p className='tech-logo-text'>{item.showName}</p>
                                    </div> 
                                    : null
                            }
                        </div>
                )
            }
        </Fragment>



            
    )
}

export default ProjectCard

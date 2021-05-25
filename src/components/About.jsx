import React from 'react'
import './styles/About.css'
import photo from '../img/profile.jpg'
import { LogoLinkedin, LogoGithub, LogoFlickr, Mail } from 'react-ionicons'
import BackButton from './BackButton'
import { ABOUT_DATA } from '../constants/Data'
import Skill from './Skill'

const About = () => {

    const DATA = ABOUT_DATA

    const openGitHub = () => { window.open('https://github.com/alexisjtoledo/', '_blank') }
    const openLinkedIn = () => { window.open('https://www.linkedin.com/in/alexistoledo/?locale=en_US', '_blank') }
    const openFlickr = () => { window.open('http://flickr.com/photos/alexisjtoledo/albums', '_blank') }
    const openMail = () => { window.open('mailto:alexis.toledo@live.com', '_blank') }

    return (
        <div className='about-container'>
            <BackButton />
            <div className='picture-frame'>
                <img src={photo} alt='Alexis Toledo' className='picture' />
            </div>
            <div className="text-canvas">
                <div className='text-container'>
                    <h6 className="about-title">
                        Hi, I'm Alexis!
                    </h6>
                    {
                        DATA.text.map(
                            (item, index) => <p className="about-text" key={index}>{item}</p>
                        )
                    }
                    
                    <h6 className="about-title">Some of my skills</h6>
                    <div className="skills">
                        {
                            DATA.skills.map(
                                item => <Skill params={item} key={item.type} />
                            )
                        }
                    </div>
                    <div className="skills-mobile">
                        <p className='about-text'>{DATA.writtenSkills}</p>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <ul className="social-buttons">
                    <li className="sm-buttons">
                        <LogoLinkedin 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => openLinkedIn()} 
                        /></li>
                    <li className="sm-buttons"><LogoGithub 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => openGitHub()} 
                        /></li>
                    <li className="sm-buttons"><LogoFlickr 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => openFlickr()} 
                        /></li>
                    <li className="sm-buttons"><Mail 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => openMail()} 
                        /></li>
                </ul>
            </div>
        </div>
    )
}

export default About
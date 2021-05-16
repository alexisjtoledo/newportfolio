import React from 'react'
import './styles/About.css'
import photo from '../img/profile.jpg'
import { LogoLinkedin, LogoGithub, LogoFlickr, Mail } from 'react-ionicons'


const About = () => {



    return (
        <div className='about-container'>
            <div className='picture-frame'>
                <img src={photo} alt='Alexis Toledo' className='picture' />
            </div>
            <div className="text-canvas">
                <div className='text-container'>
                    <h6 className="about-title">
                        Welcome!
                    </h6>
                    <p className="about-text">
                        Lorem ipsum <strong>dolor sit amet consectetur adipisicing</strong> elit. Aspernatur, dolor esse consequuntur magni ab quisquam voluptate quia dolores modi, ea adipisci incidunt illum quos nesciunt illo animi ex quod nobis.
                        Corporis, suscipit. Reprehenderit soluta veniam iure a corrupti. Omnis dicta tempore quae porro ipsum enim provident, repellat delectus quam fugiat, aliquid est unde. Inventore culpa numquam, repellat recusandae quod consectetur?
                    </p>
                    <p className="about-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus omnis cum in iusto aliquid autem eveniet dolores perferendis, molestiae ad ea facilis expedita ut quam, odio, fugiat atque sunt magni?
                        Nulla reprehenderit suscipit quisquam, odit, ea eum dolor nobis autem culpa explicabo sed qui assumenda adipisci. Possimus magni voluptatem error nostrum pariatur? Temporibus aut voluptatem eius est maxime nulla excepturi.
                    </p>
                    <p className="about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit nihil unde sed id fugiat repellat magni dolor, molestias quo quos, dolorem obcaecati facilis expedita vero recusandae placeat harum amet.
                        Quas, adipisci fugiat. Libero eius in reiciendis, est temporibus debitis corporis itaque fugiat velit voluptates quidem dolorum quos necessitatibus voluptatum voluptatem modi quod sequi magni maxime laudantium. Repellendus, facere laboriosam.
                    </p>
                    <h5 className="signature">
                        Alexis Toledo
                    </h5>
                </div>
            </div>
            <div className="social-media">
                <ul className="social-buttons">
                    <li className="sm-buttons">
                        <LogoLinkedin 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => alert('Hi!')} 
                        /></li>
                    <li className="sm-buttons"><LogoGithub 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => alert('Hi!')} 
                        /></li>
                    <li className="sm-buttons"><LogoFlickr 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => alert('Hi!')} 
                        /></li>
                    <li className="sm-buttons"><Mail 
                            color={'#E2E8E8'}
                            height="100%"
                            width="100%"
                            onClick={() => alert('Hi!')} 
                        /></li>
                </ul>
            </div>
        </div>
    )
}

export default About
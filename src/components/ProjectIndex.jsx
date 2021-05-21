// Components
import React, { 
    useState, 
    useEffect 
} from 'react'
import { 
    ChevronBack 
} from 'react-ionicons'
import ProjectCard from './ProjectCard'
import Pointer from './Pointer'
// Styles
import './styles/ProjectIndex.css'
// Data
import { 
    DEV_PROJECTS, 
    EDI_PROJECTS,
    GDS_PROJECTS,
    BRA_PROJECTS,
    SIG_PROJECTS,
    VID_PROJECTS

} from '../constants/Data'
// Images
import navigate from '../img/navigate.png'

const ProjectIndex = props => {

    /**
     * States & Global
     * @type { string } inherited - flag to chose which data will iterate
     * @projects data
     * @margin value of the dynamic margins
     * @currentScroll value of the current scroll position (X)
     */
    const { type, selected } = props
    const [projects, setProjects] = useState([])
        // type === 'left' ? DEV_PROJECTS : GDS_PROJECTS)
    const [margin, setMargin] = useState('')
    let currentScroll = 0

    /**
     * Management of the dynamic margins
     * Trigger: on window resize
     * @param { bool } onStart [true] if the component is mounting [false] if the component is updating 
     */
    const dinamicMargins = onStart => {
        // Getting the current size of the window
        const width = window.innerWidth
        // Getting the current size of Card Component
        const card = document.querySelector('.project-card')
        let cardWidth = getComputedStyle(card).width
        cardWidth = cardWidth.replace('px', '')
        const parsedCardWidth = parseInt(cardWidth, 0)
        // Setting the new value for each margin
        const newMargin = ((width - parsedCardWidth) / 2)
        // Parsing back
        const parsedNewMargin = `${newMargin}px`
        // Updating state
        setMargin(parsedNewMargin)
        // If the component is updating, set scroll back to start
        if(!onStart) {
            currentScroll = 0
            window.scroll({
                left: currentScroll,
                behavior: 'smooth'
            })
        }
    }

    /**
     * Handler for click slide
     * Triggers: onClick
     * @param { Object } e => Event 
     */
    const clicked = e => {
        // Getting the X position of the click event
        const clickPosition = e.clientX
        // Establishing where the middle line actually is
        const screenMiddle = window.innerWidth / 2
        // Triggering the action depending on which side of the screen the click was
        clickPosition > screenMiddle ? scrollProject('right') : scrollProject('left')
    }

    /**
     * Habdler for pressKey slide
     * Triggers: on PressDown
     * @param { Object } e => Event 
     */
    const keyPressed = e => {
        // Calcelling default actions of the event
        e.preventDefault()
        // Triggering the action according to the pressed key
        switch (e.code) {
            case 'ArrowRight': scrollProject('right')
                break;
            case 'KeyD': scrollProject('right')
                break;
            case 'ArrowLeft': scrollProject('left')
                break;
            case 'KeyA': scrollProject('left')
                break;
            default: break;
        }
    }

    /**
     * Handler for the scroll action
     * Triggers: from clicked() & keyPressed()
     * @param { string } dir 'left' / 'right' 
     */
    const scrollProject = dir => {
        // Getting the current width of the stack component
        const stack = document.querySelector('.project-card-container')
        let stackWidth = getComputedStyle(stack).width
        stackWidth = stackWidth.replace('px', '')
        const parsedStackWidth = parseInt(stackWidth, 0)
        // Getting the current width of every card component
        const card = document.querySelector('.pindex-container')
        let cardWidth = getComputedStyle(card).width
        cardWidth = cardWidth.replace('px', '')
        const parsedCardWidth = parseInt(cardWidth, 0)
        // Setting maximum & minimum scroll value
        const maxScroll = parsedStackWidth - parsedCardWidth
        const minScroll = 0
        // If moves right and exceeds maximum: start over
        if (dir === 'right' && currentScroll >= maxScroll) {
            currentScroll = minScroll
        }
        // If moves left and under minimum: move to last
        if (dir === 'left' && currentScroll <= minScroll) {
            currentScroll = parsedStackWidth
        }
        // Ordinay actions:
        // If moves right, move forward
        if (dir === 'right') {
            currentScroll = currentScroll += parsedCardWidth
        }
        // If moves left, move backwards
        if (dir === 'left') {
            currentScroll = currentScroll -= parsedCardWidth
        }
        // Then, set the scroll in the new position
        window.scroll({
            top: 0,
            left: currentScroll,
            behavior: 'smooth'
        })
    }

    /**
     * Starting listeners on mount
     * - Window resize listener
     * - Keydown listener
     */
    const addEventListeners = () => {
        window.addEventListener('resize', () => dinamicMargins(false))
        window.addEventListener('keydown', e => keyPressed(e))
    }

    /**
     * Removing listeners on unmount
     */
    const removeEventListeners = () => {
        window.removeEventListener('resize', dinamicMargins)
        window.removeEventListener('keydown', keyPressed)
    }

    const checkData = async () => {
        if (type === 'right') {
            switch (selected) {
                case 'editorial':
                    await setProjects(EDI_PROJECTS)
                    break;
                case 'graphic':
                    await setProjects(GDS_PROJECTS)
                    break;
                case 'branding':
                    await setProjects(BRA_PROJECTS)
                    break;
                case 'signage':
                    await setProjects(SIG_PROJECTS)
                    break;
                case 'video':
                    await setProjects(VID_PROJECTS)
                    break;
                default:
                    break;
            }
        }
        if (type === 'left') {
            await setProjects(DEV_PROJECTS)
        }
        await dinamicMargins(true)
    }

    useEffect(() => {
        checkData()
        addEventListeners()
        return () => removeEventListeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='pindex-container' onClick={e => clicked(e)} >
            <div className="next">
                <ChevronBack 
                    color='rgba(226,232,232,.05)' 
                    width='100%' 
                    height='100%'
                />
            </div>
            <div className="prev">
                <ChevronBack 
                    color='rgba(226,232,232,.05)' 
                    width='100%' 
                    height='100%'
                />
            </div>
            <h2 className='next-text'>NEXT<br/>PROJECT</h2>
            <h2 className='prev-text'>PREVIOUS<br/>PROJECT</h2>
            <Pointer />
            <h1 className="projects-title">SOME PROJECTS I'VE PARTICIPATED IN</h1>
            <div id='stack' className="project-card-container">
                <ProjectCard 
                    projects={projects} 
                    margin={margin} 
                />
            </div>
            <div className="navigate">
                <img 
                    src={navigate} 
                    alt='Move left/right by clicking or with the arrow keys' 
                    className='navigate-img'
                />
            </div>
        </div>
    )
}

export default ProjectIndex
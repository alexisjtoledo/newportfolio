// COMPONENTS
import React, { 
    useEffect, useState 
} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './Home'
import FrontEndIndex from './FrontEndIndex'
import GraphicDesignIndex from './GraphicDesignIndex'
import About from './About'
import GDSectionIndex from './GDSectionIndex'
import MobileHome from './MobileHome'

const Router = () => {

    const [isMobile, setIsMobile] = useState(false)

    const detectPortrait = () => {
        const width = window.innerWidth
        if (width < 800) {
            setIsMobile(true)
        }
    }

    const changePlatform = () => {
        const newWidth = window.innerWidth
        if (newWidth < 800) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => changePlatform())
        detectPortrait()
        return () => window.removeEventListener('resize', changePlatform)
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/developer'>
                    <FrontEndIndex />
                </Route>
                <Route path='/section'>
                    <GDSectionIndex />
                </Route>
                <Route path='/designer'>
                    <GraphicDesignIndex />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/home'>
                    {
                        isMobile ? <MobileHome /> : <Home /> 
                    }
                </Route>
                <Route path='/index'>
                    {
                        isMobile ? <MobileHome /> : <Home /> 
                    }
                </Route>
                <Route exact path='/'>
                    {
                        isMobile ? <MobileHome /> : <Home /> 
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
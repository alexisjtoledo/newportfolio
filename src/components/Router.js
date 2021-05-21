import React, { 
    // useEffect, useState 
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

const Router = () => {

    // const [isMobile, setIsMobile] = useState(false)

    // const detectPortrait = () => {
    //     const width = window.innerWidth
    //     const height = window.innerHeight
        

        
    //     console.log()
    // }

    // useEffect(() => {
    //     detectPortrait()
    // }, [])

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
                    <Home /> 
                </Route>
                <Route path='/index'>
                    <Home /> 
                </Route>
                <Route exact path='/'>
                    <Home /> 
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
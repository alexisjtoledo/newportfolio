import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import FrontEndIndex from './components/FrontEndIndex'
import GraphicDesignIndex from './components/GraphicDesignIndex'
import About from './components/About'
import GDSectionIndex from './components/GDSectionIndex'

/* STYLES */
import './constants/globalStyles.css'

function App() {

  return (
      <Router>
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
      </Router>
  )
}

export default App

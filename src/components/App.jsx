// Essentials

// Data
import { HALF_FRONTEND, HALF_DESIGN } from '../constants/Data'

// Components
import HalfScreen from './HalfScreen'

// Styles
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <HalfScreen data={HALF_FRONTEND} />
      <HalfScreen data={HALF_DESIGN} />
    </div>
  )
}

export default App

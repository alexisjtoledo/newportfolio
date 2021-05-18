import React from 'react'
import './styles/Home.css'
import HalfScreen from './HalfScreen'
import Pointer from './Pointer'
import { HALF_FRONTEND, HALF_DESIGN } from '../constants/Data'

export const Home = () => {
    return (
        <div className='home-container'>
            <Pointer />
            <HalfScreen data={HALF_FRONTEND} />
            <HalfScreen data={HALF_DESIGN} />
        </div>
    )
}

export default Home
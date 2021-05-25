// COMPONENTS
import React from 'react'
import ReactSlidy from 'react-slidy'
import { ChevronBack } from 'react-ionicons'

// STYLES
import 'react-slidy/lib/styles.css'
import './styles/Slider.css'

const Slider = props => {

    const pictures = props.pictures
    const quantity = props.quantity

    const CustomArrowLeft = props => {
        return(
            <button {...props} className='btn-prev'>
                <ChevronBack width='100%' height='100%' color='#E2E8E8' />
            </button>
        )
    }

    const CustomArrowRight = props => {
        return(
            <button {...props} className='btn-next'>
                <ChevronBack width='100%' height='100%' color='#E2E8E8' />
            </button>
        )
    }

    const noArrow = props => {
        return(
            <button {...props} className='btn-hidden' />
        )
    }

    return (
        <div className="slider-container">
            {
                quantity === 1
                    ? <ReactSlidy itemsToPreload={quantity} infiniteLoop ArrowLeft={noArrow} ArrowRight={noArrow}>
                        {
                            pictures.map (item => 
                                    <img src={item.src} alt={item.alt} key={item.id} className='slider-image' />
                            )
                        }
                    </ReactSlidy>
                    : <ReactSlidy itemsToPreload={quantity} infiniteLoop ArrowLeft={CustomArrowLeft} ArrowRight={CustomArrowRight}>
                        {
                            pictures.map (item => 
                                    <img src={item.src} alt={item.alt} key={item.id} className='slider-image' />
                            )
                        }
                    </ReactSlidy>
            }
        </div>
    )
}

export default Slider
import React from 'react'
import '../App.css'
import Button from './Button'
import './HeroSection.css'


function HeroSection() {

    const gotoCardButton = () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        })
    }

  return (
    <div className='hero-container'>
        <video autoPlay loop muted>
            <source 
                src={process.env.PUBLIC_URL + '/gif/video_4.mp4'}
                type="video/mp4">
            </source>
        </video>
       
        <h1>WELCOME TO MY WORLD!</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button 
                className='btns'
                onClick={gotoCardButton}
                buttonStyle='btn--outline'
                buttonSize='btn-large'
            >
                GET STARTED
            </Button>

            {/* <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn-large'
            >
                WATCH TRAILER <i className='far fa-play-circle'></i>
            </Button> */}
        </div>
    </div>
  )
}

export default HeroSection
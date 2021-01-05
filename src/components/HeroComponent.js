import React from 'react';
import './HeroComponent.css'
import Button from './Button'

function HeroComponent() {
    return(
        <div className='hero-container'>
            <h1>Hello! Welcome to AlejandraCODES</h1>
                 
        <div className='hero-btn'>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
            Meet Alejandra!
            </Button>
        </div>
      </div>
    );
};

export default HeroComponent
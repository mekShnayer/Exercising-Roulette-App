import React from 'react';
import './PersonalZone.css';
import underConstructionPhoto from '../components/under-construction.jpg';
function PersonalZone() {
    return (
        <div className='constuction'>
            <h2>
                under construction
            </h2>
            <img src={underConstructionPhoto} alt='' />
        </div>
    )
}

export default PersonalZone;
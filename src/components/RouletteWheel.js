import React from 'react';
import ExerciseWheel from './ExerciseWheel.js';
import './RouletteWheel.css';

const RouletteWheel = () => {
  return(
    <div className="Games-page">
      <div className="side-bar"></div>
      <div className="Game-Container">
        <ExerciseWheel />
      </div>      
      <div className="side-bar"></div>
    </div>
  );
}
export default RouletteWheel;
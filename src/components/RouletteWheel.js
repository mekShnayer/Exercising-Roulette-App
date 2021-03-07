import React from 'react';
import TruthOrDare from './truthOrDareComp.js';
import './RouletteWheel.css';

const RouletteWheel = () => {
  return(
    <div className="Games-page">
      <div className="side-bar"></div>
      <div className="Game-Container">
        <TruthOrDare />
      </div>      
      <div className="side-bar"></div>
    </div>
  );
}
export default RouletteWheel;
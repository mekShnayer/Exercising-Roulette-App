import React from 'react';
import { workouts } from './Wheel';
import { Link } from 'react-router-dom';
import './ChooseExercise.css';
// import { GlobalStateContext } from '../context/GlobalStateContext';
// import { winnerItem } from './Wheel';

function ChooseExercise() {
   
  return (
    <ul className='workout-list-to-choose'>
      <h2>or choose your workout: </h2>
      {workouts.map((workout, workoutId) => {
        return (
          <li key={workoutId} >
            <Link to={{pathname: '/workout', search: `?workoutId=${workoutId}`}}>
              {workout.workoutName}
            </Link>
          </li>
        )
      })}
    </ul>

  )
}


export default ChooseExercise;
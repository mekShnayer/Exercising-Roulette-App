import React from 'react';
const rest = { name: 'rest', visual: 'rest photo', time: 10 }
let legworkout = [
    { name: '1', visual: '', time: 20 },
    rest,
    { name: '2', visual: '', time: 20 },
    rest,
    { name: '3', visual: '', time: 20 },
    rest,
    { name: '4', visual: '', time: 20 },
    rest,
    { name: '5', visual: '', time: 20 },
    rest,
    { name: '6', visual: '', time: 20 },
    rest,
    { name: '7', visual: '', time: 20 },
    rest,
    { name: '8', visual: '', time: 20 },
    rest,

]



function Workout(workout,legworkout) {
    let work = workout.map(exercise => {
        const work = (
            <div>
                <h1>{exercise.name}</h1>
                <img src={exercise.visual} />
                <h2>timer: {exercise.time}</h2>
            </div>
        )
        setTimeout(work, exercise.time*1000)
    })
    return ({work})
}

export default Workout;
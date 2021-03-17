import React from 'react';
import Timer from '../components/Timer';

const rest = { name: 'rest', visual: 'rest photo', time: 10 };
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
class Workout extends React.Component {
    render() {
        let exercises = legworkout.map((exercise, index) => {
            let exerciseDiv = (
                <div key={index}>
                    <h1>exercise name : {exercise.name}</h1>
                    <div> exercise visual : {exercise.visual}</div>
                    <h2>exercise time : {exercise.time}</h2>
                </div>
            )
            return (
                <div>{exerciseDiv}</div>
            )
        });

        return (
            <div>
                <Timer time={legworkout[0].time} />
                {exercises}
            </div>

        )

    }
}

export default Workout;
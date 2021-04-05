import React from 'react';
import './Wheel.css';
import Dialog from './Dialog';

import backExtentions from './exercise-images/back-extentions.jpg';
import benchDips from './exercise-images/bench-dips.jpg';
import buttKicks from './exercise-images/but-kicks.jpg';
import donkeyKicks from './exercise-images/donkey-kicks.jpg';
import hamstringStretch from './exercise-images/hamstringStretch.jpg';
import hipAbduction from './exercise-images/hip-abduction.jpg';
import hipAndBackStretch from './exercise-images/HipAndBackStretch.jpg';
import jumpingJacks from './exercise-images/jumping-jacks.jpg';
import legUps from './exercise-images/leg-up.jpg';
import lunge from './exercise-images/lunge.jpg';
import Rest from './exercise-images/rest.jpeg';
import squat from './exercise-images/Squat.jpg';
import plank from './exercise-images/plank.jpg';
import quadStretch from './exercise-images/QuadStretch.jpg';
import runKneeUp from './exercise-images/run-knee-up.jpg';
import shoulderStretch from './exercise-images/ShoulderStretch.jpg';
import situps from './exercise-images/situps.jpg';
import skaters from './exercise-images/Skaters.png';
import skiJumps from './exercise-images/ski-jumps.gif';
import upperBackStretch from './exercise-images/UpperBackStretch.jpg';
import pushUps from './exercise-images/pushUps.gif';
import widePushUps from './exercise-images/widePushUps.gif';

export const exercises = [
    'legs',
    'arms',
    'core',
    'full-body',
    'cardio',
    'stretch',
]
const rest = { exerciseName: "rest", visual:Rest, time: 10 };
export const workouts = [
    {
        workoutName: 'legs', exercisesArr: [
            { exerciseName: "1", visual: squat, time: 10 },
            rest,
            { exerciseName: "2", visual: lunge, time: 10 },
            rest,
            { exerciseName: "3", visual: donkeyKicks, time: 10 },
            rest,
            { exerciseName: "4", visual: hipAbduction, time: 10 },
            rest,
            { exerciseName: "5", visual: squat, time: 10 },
            rest,
            { exerciseName: "6", visual: lunge, time: 10 },
            rest,
            { exerciseName: "7", visual: donkeyKicks, time: 10 },
            rest,
            { exerciseName: "8", visual: hipAbduction, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'arms', exercisesArr: [
            { exerciseName: "1", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "2", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "3", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "4", visual: widePushUps, time: 10 },
            rest,
            { exerciseName: "5", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "6", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "7", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "8", visual: widePushUps, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'core', exercisesArr: [
            { exerciseName: "1", visual: legUps, time: 10 },
            rest,
            { exerciseName: "2", visual: plank, time: 10 },
            rest,
            { exerciseName: "3", visual: situps, time: 10 },
            rest,
            { exerciseName: "4", visual: backExtentions, time: 10 },
            rest,
            { exerciseName: "5", visual: legUps, time: 10 },
            rest,
            { exerciseName: "6", visual: plank, time: 10 },
            rest,
            { exerciseName: "7", visual: situps, time: 10 },
            rest,
            { exerciseName: "8", visual: backExtentions, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'full-body', exercisesArr: [
            { exerciseName: "1", visual: squat, time: 10 },
            rest,
            { exerciseName: "2", visual: lunge, time: 10 },
            rest,
            { exerciseName: "3", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "4", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "5", visual: legUps, time: 10 },
            rest,
            { exerciseName: "6", visual: plank, time: 10 },
            rest,
            { exerciseName: "7", visual: situps, time: 10 },
            rest,
            { exerciseName: "8", visual: backExtentions, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'cardio', exercisesArr: [
            { exerciseName: "1", visual: jumpingJacks, time: 10 },
            rest,
            { exerciseName: "2", visual: skiJumps, time: 10 },
            rest,
            { exerciseName: "3", visual: runKneeUp, time: 10 },
            rest,
            { exerciseName: "4", visual: buttKicks, time: 10 },
            rest,
            { exerciseName: "5", visual: squat, time: 10 },
            rest,
            { exerciseName: "6", visual: lunge, time: 10 },
            rest,
            { exerciseName: "7", visual: jumpingJacks, time: 10 },
            rest,
            { exerciseName: "8", visual: skiJumps, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'stretch', exercisesArr: [
            { exerciseName: "1", visual: hamstringStretch, time: 10 },
           
            { exerciseName: "2", visual: hipAndBackStretch, time: 10 },
            
            { exerciseName: "3", visual: quadStretch, time: 10 },
            
            { exerciseName: "4", visual: upperBackStretch, time: 10 },
           
            { exerciseName: "5", visual: hamstringStretch, time: 10 },
          
            { exerciseName: "6", visual: hipAndBackStretch, time: 10 },
            
            { exerciseName: "7", visual:quadStretch, time: 10 },
            
            { exerciseName: "8", visual: upperBackStretch, time: 10 },
           
        ],
    },
]

export let winnerItem=0;
class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            items: exercises, //or this.props.exerciseArr-depands where i puth the array
            shouleStartSpinning: false,
            spinningDuration: 4,
            selectedItem: null,
            onButtonClick: () => {
                winnerItem = Math.floor(Math.random() * this.state.items.length);
                this.setState({ selectedItem: winnerItem, shouleStartSpinning: true })

            }
        }
    }

    render() {

        if (this.state.shouleStartSpinning) {
            setTimeout(() => {
                this.setState({ shouleStartSpinning: false, selectedItem: null, isDialogOpen: true })
                console.log(winnerItem)
                console.log(
                    `you won ${this.state.items[winnerItem]} exercise!`)
            }, this.state.spinningDuration * 1000)

        }

        const wheelVars = {
            '--nb-item': this.state.items.length,
            '--selected-item': this.state.selectedItem,
            '--spinning-duration': `${this.state.spinningDuration}s`,
        }
        return (
            <div className="wheel-container">
                {this.state.isDialogOpen ? <Dialog winnerItem={this.state.items[winnerItem]} onClose={(e) => this.setState({ isDialogOpen: false })} /> : ''}
                <div className="triangle-down"></div>
                <div className={`wheel ${this.state.shouleStartSpinning ? 'spinning' : ''}`}
                    style={wheelVars}
                >
                    {this.state.items.map((item, index) => (
                        <div className="wheel-item" key={index}
                            style={{ '--item-nb': index }}>
                            {item}
                        </div>
                    ))}
                </div>
                <button className='spin-button' onClick={this.state.onButtonClick}>
                    spin
                </button>
            </div>
        )
    }
}
export default Wheel;
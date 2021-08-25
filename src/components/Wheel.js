import React, { Component } from 'react';
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
import { ThemeContext } from '../context/ThemeContext';
export const exercises = [
    'legs',
    'arms',
    'core',
    'full-body',
    'cardio',
    'stretch',
]
const rest = { exerciseName: "Rest", visual: Rest, time: 10 };
export const workouts = [
    {
        workoutName: 'Legs', exercisesArr: [
            { exerciseName: "Squats", visual: squat, time: 30 },
            rest,
            { exerciseName: "Lunges", visual: lunge, time: 30 },
            rest,
            { exerciseName: "Donkey kicks", visual: donkeyKicks, time: 10 },
            rest,
            { exerciseName: "Hip Abduction", visual: hipAbduction, time: 10 },
            rest,
            { exerciseName: "Squats", visual: squat, time: 10 },
            rest,
            { exerciseName: "Lunges", visual: lunge, time: 10 },
            rest,
            { exerciseName: "Donkey kicks", visual: donkeyKicks, time: 10 },
            rest,
            { exerciseName: "Hip Abduction", visual: hipAbduction, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'Arms', exercisesArr: [
            { exerciseName: "Bench dips", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "Push ups", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "Bench dips", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "Wide push ups", visual: widePushUps, time: 10 },
            rest,
            { exerciseName: "Bench dips", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "Push ups", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "Bench dips", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "Wide push ups", visual: widePushUps, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'Core', exercisesArr: [
            { exerciseName: "Leg-Ups", visual: legUps, time: 10 },
            rest,
            { exerciseName: "Plank", visual: plank, time: 10 },
            rest,
            { exerciseName: "Situps", visual: situps, time: 10 },
            rest,
            { exerciseName: "Back Extentions", visual: backExtentions, time: 10 },
            rest,
            { exerciseName: "Leg Ups", visual: legUps, time: 10 },
            rest,
            { exerciseName: "Plank", visual: plank, time: 10 },
            rest,
            { exerciseName: "Sit ups", visual: situps, time: 10 },
            rest,
            { exerciseName: "Back Extentions", visual: backExtentions, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'Full-body', exercisesArr: [
            { exerciseName: "Squat", visual: squat, time: 10 },
            rest,
            { exerciseName: "Lunge", visual: lunge, time: 10 },
            rest,
            { exerciseName: "Bench Dips", visual: benchDips, time: 10 },
            rest,
            { exerciseName: "Push Ups", visual: pushUps, time: 10 },
            rest,
            { exerciseName: "Leg Ups", visual: legUps, time: 10 },
            rest,
            { exerciseName: "Plank", visual: plank, time: 10 },
            rest,
            { exerciseName: "sit ups", visual: situps, time: 10 },
            rest,
            { exerciseName: "Back Extentions", visual: backExtentions, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'Cardio', exercisesArr: [
            { exerciseName: "Jumping Jacks", visual: jumpingJacks, time: 10 },
            rest,
            { exerciseName: "Ski Jumps", visual: skiJumps, time: 10 },
            rest,
            { exerciseName: "Run Knees Up", visual: runKneeUp, time: 10 },
            rest,
            { exerciseName: "Butt Kicks", visual: buttKicks, time: 10 },
            rest,
            { exerciseName: "Squat", visual: squat, time: 10 },
            rest,
            { exerciseName: "Lunge", visual: lunge, time: 10 },
            rest,
            { exerciseName: "Jumping Jacks", visual: jumpingJacks, time: 10 },
            rest,
            { exerciseName: "Ski Jumps", visual: skiJumps, time: 10 },
            rest
        ],
    },
    {
        workoutName: 'Stretch', exercisesArr: [
            { exerciseName: "Hamstring Stretch", visual: hamstringStretch, time: 10 },

            { exerciseName: "Hip And Back Stretch", visual: hipAndBackStretch, time: 10 },

            { exerciseName: "Quad Stretch", visual: quadStretch, time: 10 },

            { exerciseName: "Upper Back Stretch", visual: upperBackStretch, time: 10 },

            { exerciseName: "Hamstring Stretch", visual: hamstringStretch, time: 10 },

            { exerciseName: "Hip And Back Stretch", visual: hipAndBackStretch, time: 10 },

            { exerciseName: "Quad Stretch", visual: quadStretch, time: 10 },

            { exerciseName: "Upper Back Stretch", visual: upperBackStretch, time: 10 },

        ],
    },
]

export let winnerItem = 0;
class Wheel extends Component {
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
    static contextType = ThemeContext;

    render() {

        if (this.state.shouleStartSpinning) {
            setTimeout(() => {
                this.setState({ shouleStartSpinning: false, selectedItem: null, isDialogOpen: true })
                // console.log(winnerItem)
                // console.log(
                //     `you won ${this.state.items[winnerItem]} exercise!`)
            }, this.state.spinningDuration * 1000)

        }

        const wheelVars = {
            '--nb-item': this.state.items.length,
            '--selected-item': this.state.selectedItem,
            '--spinning-duration': `${this.state.spinningDuration}s`,
        }
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="wheel-container" >
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
                <button className='spin-button' style={{ background: theme.ui, color: theme.syntax }} onClick={this.state.onButtonClick}>
                    spin
                </button>
            </div>
        )
    }
}
export default Wheel;
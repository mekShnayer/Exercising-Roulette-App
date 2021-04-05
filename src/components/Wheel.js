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

export const exercises = [
    'legs',
    'arms',
    'core',
    'full-body',
    'cardio',
    'stretch',
]
const rest = { name: "rest", visual: {Rest}, time: 10 };
export const workouts = [
    {
        workoutName: 'legs', exercisesArr: [
            { exerciseName: "1", visual: "squat", time: 10 },
            rest,
            { exerciseName: "2", visual: "lounge", time: 10 },
            rest,
            { exerciseName: "3", visual: "donkey kicks", time: 10 },
            rest,
            { exerciseName: "4", visual: "hip abduction", time: 10 },
            rest,
            { exerciseName: "5", visual: "squat", time: 10 },
            rest,
            { exerciseName: "6", visual: "lounge", time: 10 },
            rest,
            { exerciseName: "7", visual: "donkey kicks", time: 10 },
            rest,
            { exerciseName: "8", visual: "hip abduction", time: 10 },
            rest
        ],
    },
    {
        workoutName: 'arms', exercisesArr: [
            { exerciseName: "1", visual: "bench-dips", time: 10 },
            rest,
            { exerciseName: "2", visual: "push-ups", time: 10 },
            rest,
            { exerciseName: "3", visual: "arm adduction", time: 10 },
            rest,
            { exerciseName: "4", visual: "arm abduction", time: 10 },
            rest,
            { exerciseName: "5", visual: "bench-dips", time: 10 },
            rest,
            { exerciseName: "6", visual: "push-ups", time: 10 },
            rest,
            { exerciseName: "7", visual: "arm adduction", time: 10 },
            rest,
            { exerciseName: "8", visual: "arm abduction", time: 10 },
            rest
        ],
    },
    {
        workoutName: 'core', exercisesArr: [
            { exerciseName: "1", visual: "leg-up", time: 10 },
            rest,
            { exerciseName: "2", visual: "plank", time: 10 },
            rest,
            { exerciseName: "3", visual: "sit-ups", time: 10 },
            rest,
            { exerciseName: "4", visual: "back-extentions", time: 10 },
            rest,
            { exerciseName: "5", visual: "leg-up", time: 10 },
            rest,
            { exerciseName: "6", visual: "plank", time: 10 },
            rest,
            { exerciseName: "7", visual: "sit-ups", time: 10 },
            rest,
            { exerciseName: "8", visual: "back-extentions", time: 10 },
            rest
        ],
    },
    {
        workoutName: 'full-body', exercisesArr: [
            { exerciseName: "1", visual: "squat", time: 10 },
            rest,
            { exerciseName: "2", visual: "lounge", time: 10 },
            rest,
            { exerciseName: "3", visual: "bench-dip", time: 10 },
            rest,
            { exerciseName: "4", visual: "push-ups", time: 10 },
            rest,
            { exerciseName: "5", visual: "leg-up", time: 10 },
            rest,
            { exerciseName: "6", visual: "plank", time: 10 },
            rest,
            { exerciseName: "7", visual: "sit-ups", time: 10 },
            rest,
            { exerciseName: "8", visual: "back-extentions", time: 10 },
            rest
        ],
    },
    {
        workoutName: 'cardio', exercisesArr: [
            { exerciseName: "1", visual: "jumping-jacks", time: 10 },
            rest,
            { exerciseName: "2", visual: "ski", time: 10 },
            rest,
            { exerciseName: "3", visual: "run with your knees up", time: 10 },
            rest,
            { exerciseName: "4", visual: "butt kicks", time: 10 },
            rest,
            { exerciseName: "5", visual: "squat-walk", time: 10 },
            rest,
            { exerciseName: "6", visual: "lounge-walk", time: 10 },
            rest,
            { exerciseName: "7", visual: "jumping-jacks", time: 10 },
            rest,
            { exerciseName: "8", visual: "ski", time: 10 },
            rest
        ],
    },
    {
        workoutName: 'stretch', exercisesArr: [
            { exerciseName: "1", visual: "cat-stretch", time: 10 },
            rest,
            { exerciseName: "2", visual: "upside-down dog", time: 10 },
            rest,
            { exerciseName: "3", visual: "split", time: 10 },
            rest,
            { exerciseName: "4", visual: "back-stretch", time: 10 },
            rest,
            { exerciseName: "5", visual: "cat-stretch", time: 10 },
            rest,
            { exerciseName: "6", visual: "upside-down dog", time: 10 },
            rest,
            { exerciseName: "7", visual: "split", time: 10 },
            rest,
            { exerciseName: "8", visual: "back-stretch", time: 10 },
            rest
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
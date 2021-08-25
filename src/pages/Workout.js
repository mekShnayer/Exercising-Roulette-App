import React from "react";
import Timer from '../components/Timer';
import WellDoneComponent from "../components/WellDoneComponent";
import { winnerItem, workouts } from '../components/Wheel';
import './workout.css';

// const rest = { name: "rest", visual: "rest photo", time: 10 };
// let legworkout = [
//   { name: "1", visual: "squat", time: 10 },
//   rest,
//   { name: "2", visual: "lounge", time: 10 },
//   rest,
//   { name: "3", visual: "hip adduction", time: 10 },
//   rest,
//   { name: "4", visual: "hip abduction", time: 10 },
//   rest,
//   { name: "5", visual: "squat", time: 10 },
//   rest,
//   { name: "6", visual: "lounge", time: 10 },
//   rest,
//   { name: "7", visual: "hip adduction", time: 10 },
//   rest,
//   { name: "8", visual: "hip abduction", time: 10 },
//   rest
// ];

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      exerciseArr: workouts[winnerItem].exercisesArr,
      workout: workouts[winnerItem],
      isWorkoutDone: false
    };
  }

  updateIndex() {
    let { index, exerciseArr } = this.state;
    if (index < exerciseArr.length - 1) {
      this.setState({ index: index + 1 });
      console.log(this.state)
    } else if (index === exerciseArr.length - 1) {
      this.setState({ isWorkoutDone: true })
    }
  }

  async updateIndexInterval() {
    let { exerciseArr } = this.state;
    // let time = exerciseArr[index].time;
    for (let idx = 0; idx <= exerciseArr.length - 1; idx++) {
      let time = exerciseArr[idx].time;
      await timeout(time * 1000);
      this.updateIndex();
    }
  }

  componentDidMount() {
    this.updateIndexInterval();
    console.log(this.state.workout)
  }
  componentWillUnmount() {
    clearInterval(this.updateIndexInterval);
    this.setState = (state, callback) => {
      return;
    }
  }
  render() {
    let { exerciseArr, index } = this.state;
    let name = exerciseArr[index].exerciseName;
    let visual = exerciseArr[index].visual;
    const time = exerciseArr[index].time;
    return (
      <div>
        {this.state.isWorkoutDone ? <WellDoneComponent workout={this.state.workout.workoutName}
          onClose={(e) => this.setState({ isWorkoutDone: false })
          }
        /> : ''}
        <div className="exercise-box" key={index}>
          <div className='workout-info'>
            <h1>{this.state.workout.workoutName} workout</h1>
            <h2>exercise : {name}</h2>
            <img src={visual} className='visual'></img>
            <Timer time={time} />

          </div>

        </div>
      </div>
    );
  }
}

export default Workout;


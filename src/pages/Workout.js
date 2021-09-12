import React from "react";
// import { withRouter } from "react-router";
import Timer from '../components/Timer';
import WellDoneComponent from "../components/WellDoneComponent";
import { workouts } from '../components/Wheel';
import './workout.css';
// import 'query-string'
// import getUrlParam from URLUtils

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

// function Workout({ name }) {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Workout
class Workout extends React.Component {
  constructor(props) {
    super(props);

    // const winnerItem = URLUtils.getUrlParam('workoutId')
    const winnerItem = new URLSearchParams(this.props.location.search).get("workoutId") || 0

    this.state = {
      index: 0,
      exerciseArr: workouts[winnerItem].exercisesArr,
      workout: workouts[winnerItem],
      isWorkoutDone: false,
      isPaused: false,
      
    };
  }
  PauseOrContinueWorkout = this.PauseOrContinueWorkout.bind(this);

  updateIndex() {
    let { index, exerciseArr, isPaused } = this.state;
    if ((index < exerciseArr.length - 1) && !isPaused) {
      this.setState({ index: index + 1 });
    } else if ((index === exerciseArr.length - 1) && !isPaused) {
      this.setState({ isWorkoutDone: true })
    }
  }

  PauseOrContinueWorkout() {
    const { isPaused } = this.state;
    if (!isPaused) {
      this.startWorkout();
    }
    this.setState({ isPaused: !isPaused })
  }

  async updateIndexInterval() {
    let { exerciseArr } = this.state;
    for (let idx = 0; idx <= exerciseArr.length - 1; idx++) {
      if (!this.state.isPaused) {
        let time = exerciseArr[idx].time;
        await timeout(time * 1000);
        this.updateIndex();
      }
    }
  }
  // startWorkout = () => {
  //   console.log('started workout',this.indexId)

  //   let { exerciseArr, index } = this.state;
  //   let time = exerciseArr[index].time;
  //   this.indexId = setInterval(() => {
  //     console.log('started workout',this.indexId);
  //     this.updateIndexInterval();
  //   }, time * 1000)
  //   clearInterval(this.indexId);
  //   console.log('should clear id')
  // }

  componentDidMount() {
    this.updateIndexInterval();
    // this.startWorkout();

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
    // console.log('>>> match:', this.props.id)

    return (

      <div className='workout-page-container'>
        {this.state.isWorkoutDone ? <WellDoneComponent workout={this.state.workout.workoutName}
          onClose={(e) => this.setState({ isWorkoutDone: false })
          }
        /> : ''}
        <div className="exercise-box" key={index}>
          <div className='workout-info'>
            <h1>
              {this.state.workout.workoutName} workout
            </h1>
            <h2>
              Exercise : {name}
            </h2>
            <img src={visual} className='visual' alt=''></img>
            <Timer time={time} workoutIsPaused={this.state.isPaused} />
            {/*  */}
          </div>

          <button onClick={this.PauseOrContinueWorkout}>
            {this.state.isPaused ? 'Continue workout' : 'Pause workout'}
          </button>
        </div>
      </div>

    )
  }
}

export default Workout;


import React from "react";
import Timer from '../components/Timer';

const rest = { name: "rest", visual: "rest photo", time: 10 };
let legworkout = [
  { name: "1", visual: "Yople?", time: 10 },
  rest,
  { name: "2", visual: "yodal", time: 20 },
  rest,
  { name: "3", visual: "", time: 30 },
  rest,
  { name: "4", visual: "", time: 40 },
  rest,
  { name: "5", visual: "", time: 30 },
  rest,
  { name: "6", visual: "", time: 20 },
  rest,
  { name: "7", visual: "", time: 10 },
  rest,
  { name: "8", visual: "", time: 20 },
  rest
];

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      exerciseArr: legworkout
    };
  }

  updateIndex() {
    let { index, exerciseArr } = this.state;
    if (index < exerciseArr.length - 1) {
      this.setState({ index: index + 1 });
    }
  }

  async updateIndexInterval() {
    let { exerciseArr } = this.state;
    // let time = exerciseArr[index].time;
    for (let idx = 0; idx < exerciseArr.length - 1; idx++) {
        let time = exerciseArr[idx].time;
        await timeout(time * 1000);
        this.updateIndex();
      }
  }
  
  componentDidMount() {
    this.updateIndexInterval();
  }    

  render() {
    let { exerciseArr, index } = this.state;
    let name = exerciseArr[index].name;
    let visual = exerciseArr[index].visual;
    const time = exerciseArr[index].time;
    return (
      <div>
        <div>
          <div className="exercise-box" key={index}>
            <h1>exercise name : {name}</h1>
            <div> exercise visual : {visual}</div>
            <h2>exercise time : {time}</h2>
            <Timer time={time} />
          </div>
        </div>
      </div>
    );
  }
}

export default Workout;



/////////////////////////////////
// import React from 'react';
// import Timer from '../components/Timer';
// import './workout.css';

// const rest = { name: 'rest', visual: 'rest photo', time: 10 };
// let legworkout = [
//     { name: '1', visual: '', time: 5 },
//     rest,
//     { name: '2', visual: '', time: 20 },
//     rest,
//     { name: '3', visual: '', time: 30 },
//     rest,
//     { name: '4', visual: '', time: 40 },
//     rest,
//     { name: '5', visual: '', time: 30 },
//     rest,
//     { name: '6', visual: '', time: 20 },
//     rest,
//     { name: '7', visual: '', time: 10 },
//     rest,
//     { name: '8', visual: '', time: 20 },
//     rest,
// ]
// class Workout extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             exerciseArr: legworkout,
//             index: 0,
//         }
//     }
//     updateIndex = () => {
//         let { index, exerciseArr } = this.state;
//         if (index < exerciseArr.length - 1) {
//             this.setState({ index: index + 1 })
//         }

//     }

//     updateIndexInterval = () => {
//         console.log('[updateIndexInterval]')
        
//         const intervalID = setInterval(() => {
//             this.updateIndex()
//             // clearInterval(intervalID)
//             // console.log('[updateInterval] interval time 2:', time, 'index:', index)
//         }, this.time());
//         // clearInterval(intervalID)

//     }
// time = () => {
//     return this.state.exerciseArr[this.state.index].time* 1000
// }
//     componentDidMount() {
//         console.log('componentDidMount')
//         // let { index, exerciseArr } = this.state;
//         // for(let i=0; i<exerciseArr.length; i++){
//         this.updateIndexInterval();
//         // }
//     }
//     // componentDidUpdate() {
//     //     this.updateIndexInterval();
//     // }
//     render() {
//         let { exerciseArr, index } = this.state;
//         let name = exerciseArr[index].name;
//         let visual = exerciseArr[index].visual;
//         const time = exerciseArr[index].time;
//         console.log(this.state, '[render] the time is:', time)
//         return (

//             <div>
//                 <div>
//                     <div className='exercise-box'
//                         key={index}>
//                         <h1>exercise name : {name}</h1>
//                         <div> exercise visual : {visual}</div>
//                         <h2>exercise time : {time}</h2>
//                         <Timer time={time} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//     componentWillUnmount() {
//         clearInterval(this.updateIndexInterval);
//         this.setState = (state, callback) => {
//             return;
//         }
//     }
// }

// export default Workout;
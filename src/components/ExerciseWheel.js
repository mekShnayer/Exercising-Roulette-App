import React from 'react';
import './ExerciseWheel.css';
class ExerciseWheel extends React.Component {
  state = {
    // name: "circle"
    name: false
  }

  startRotation = () => {
    this.setState({
      // name: "circle start-rotate"
      name: !this.state.name
    });
    setTimeout(() => {
      this.setState({
        name: !this.state.name
        // name: "circle start-rotate stop-rotate"
      });
    }, Math.floor(Math.random() * 10000) + 1); // notice that it is sometimes too long, and if i put 4 secs it always returns to the same exercise.
  }
  render() {
    const exerciseArr = ['body', 'legs', 'hands', 'core', 'cardio', 'stretch', 'body', 'legs', 'hands', 'core', 'cardio', 'stretch',];
    return (
      <div>
        <div className='roulette-container'>
          <div className="triangle-down"></div>
          <ul className={`circle ${this.state.name ? 'start-rotate' : ' start-rotate stop-rotate' }`} >
            {exerciseArr.map((exercise,index) => {
              return (
                <li className="wheel-part"
                key={index}>
                  <div className="text">{exercise}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <button onClick={this.startRotation} className="spin-button" >SPIN</button>
      </div>
    );
  }
}

export default ExerciseWheel;





// class Spinner extends React.Component {
//   state = {
//     name: "circle"
//   }

//   startRotation = () => {
//     this.setState({
//       name: "circle start-rotate"
//     });
//      setTimeout(() => {
//       this.setState({name: "circle start-rotate stop-rotate"});
//     }, Math.floor(Math.random() * 10000) + 1);
//   }
//   render() {
//     return(
//       <div>
//         <div className="triangle-down"></div>
//         <ul className={this.state.name} >
//           <li className="wheel-part">
//             <div className="text">1</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">2</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">3</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">4</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">5</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">6</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">7</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">8</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">9</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">10</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">11</div>
//           </li>
//           <li className="wheel-part">
//             <div className="text">12</div>
//           </li>
//         </ul>
//         <button onClick={this.startRotation} className="spin-button" >SPIN</button>
//       </div>
//     );
//   }
// }

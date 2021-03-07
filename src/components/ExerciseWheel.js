import React from 'react';
import './ExerciseWheel.css';
class ExerciseWheel extends React.Component {
    state = {
      name: "circle"
    }
    
    startRotation = () => {
      this.setState({
        name: "circle start-rotate"
      });
       setTimeout(() => {
        this.setState({name: "circle start-rotate stop-rotate"});
      }, Math.floor(Math.random() * 10000) + 1);
    }
    render() {
      return(
        <div>
          <div className="triangle-down"></div>
          <ul className={this.state.name} >
            <li className="wheel-part">
              <div className="text">body</div>
            </li>
            <li className="wheel-part">
              <div className="text">legs</div>
            </li>
            <li className="wheel-part">
              <div className="text">hands</div>
            </li>
            <li className="wheel-part">
              <div className="text">core</div>
            </li>
            <li className="wheel-part">
              <div className="text">body</div>
            </li>
            <li className="wheel-part">
              <div className="text">legs</div>
            </li>
            <li className="wheel-part">
              <div className="text">hands </div>
            </li>
            <li className="wheel-part">
              <div className="text">core</div>
            </li>
            <li className="wheel-part">
              <div className="text">strech</div>
            </li>
            <li className="wheel-part">
              <div className="text">cardio</div>
            </li>
            <li className="wheel-part">
              <div className="text">strech</div>
            </li>
            <li className="wheel-part">
              <div className="text">cardio</div>
            </li>
          </ul>
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

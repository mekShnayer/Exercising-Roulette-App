import React, { createContext, Component } from 'react';
// import { workouts } from '../components/Wheel';

export const GlobalStateContext = createContext();

class GlobalStateContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // workoutArr: workouts,
      // selectedItem: null,
      // // index: 0,
      // exerciseArr: workouts[winnerItem].exercisesArr,
      // workout: workouts[winnerItem],
      // isWorkoutDone: false,
      // isPaused: false,
      // ClickForWinnerItem: () => {
      //   winnerItem = Math.floor(Math.random() * this.state.items.length);
      //   this.setState({ selectedItem: winnerItem, shouleStartSpinning: true })
    }
  }


  render() {
    return (
      <GlobalStateContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GlobalStateContext.Provider>
    )
  }

}
export default GlobalStateContextProvider;
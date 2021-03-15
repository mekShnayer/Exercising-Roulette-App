import React from 'react';
import './Dialog.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Workout from '../pages/Workout';

class Dialog extends React.Component {
    openWorkout(winnerItem) {
        //should open workout page with the right workout
        return (
            <div>
                should move to workout page with {winnerItem}
            </div>
            // <Router>
            //     <div>
            //         <Link to="/workout">Workout</Link>
            //     </div>

            //     <Switch>
            //         <Route exact path='/workout' component={Workout} />
            //     </Switch>
            // </Router>
        )

    }
    render() {

        return (
            <div className='dialog-page'>
                <div className='dialog-box'>

                    <div>
                        <h1>Ready to start {this.props.winnerItem} exercise?</h1>

                        <div className='dialog-answers-box'>
                            <button onClick={() => this.openWorkout(this.props.winnerItem)}>
                                <Link to='/workout' style={{textDecoration:'none',color:'black'}}>YES! let's go!</Link>
                            </button>
                            <button onClick={this.props.onClose}>Nope, let's try again</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Dialog;
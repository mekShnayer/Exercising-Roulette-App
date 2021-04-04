import React from 'react';
import './Dialog.css';
import { Link } from 'react-router-dom';
// import Workout from '../pages/Workout';

class Dialog extends React.Component {
    render() {
        return (
            <div className='dialog-page'>
                <div className='dialog-box'>
                    <div>
                        <h1>Ready to start {this.props.winnerItem} exercise?</h1>
                        <div className='dialog-answers-box'>
                            <button>
                                <Link to='/workout'
                                    style={{ textDecoration: 'none', color: 'black' }}>
                                    YES! let's go!
                                </Link>
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
import React from 'react';

class Dialog extends React.Component {
    render() {
        return (
            <div className='dialog-box'>
                <button className='dialog-close-button'
                    onClick={this.props.onClose}>x</button>
                <div>
                    <h1>you just won {this.props.winnerItem} exercise!</h1>
                    <p>would you like to start?</p>
                    <button>YES! let's start!</button>
                    <button>Nope, let's try again</button>
                </div>
            </div>
        )
    }
}

export default Dialog;
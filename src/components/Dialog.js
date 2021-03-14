import React from 'react';

class Dialog extends React.Component {
    render() {
        return (
            <div className='dialog-box'>
                <button className='dialog-close-button'
                onClick={this.props.onClose}>x</button>
                <div>I'm a dialog, you just won {this.props.winnerItem} exercise!</div>
            </div>
        )
    }
}

export default Dialog;
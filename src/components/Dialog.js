import React from 'react';

class Dialog extends React.Component {
    render() {
        return (
            <div>
                I'm a dialog, you just won {this.props.winnerItem} exercise!
            </div>
        )
    }
}

export default Dialog;
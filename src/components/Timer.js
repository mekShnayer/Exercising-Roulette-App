import React from 'react';
import './timer.css';

// function timerout(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            // timeLeft: this.props.time,
            isPaused: false
        }
    }
    updateTime = () => {
        let { time } = this.state;
        if (!this.state.isPaused) {
            if (time !== 0) {
                this.setState({ time: this.state.time - 1 })
            } else {
                clearInterval(this.timerID)
            }
        }

    }

    startInterval = () => {
        this.timerID = setInterval(() => {
            this.updateTime();
            console.log('still timing', this.state.time)
        }, 1000);
    }

    pauseOrContinue = () => {
        let { isPaused } = this.state;
        if (isPaused) {
            this.startInterval();
            this.setState({ isPaused: false });
        } else {
            clearInterval(this.timerID);
            this.setState({ isPaused: true });
        }
    }

    componentDidMount() {
        this.startInterval();
    }

    render() {
        let { time } = this.state;
        return (
            <div>
                <div className='timer-box' >
                    {time !== 0 ? 'time:' + time : 'end of time'}
                </div>
                <button onClick={this.pauseOrContinue}>
                    {this.state.isPaused ? 'Continue timer' : 'Pause timer'}
                </button>
            </div>


        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState = (state, callback) => {
            return;
        }
    }
}

export default Timer;
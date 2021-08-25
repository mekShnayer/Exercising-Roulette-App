import React from 'react';
import './timer.css';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
        }
    }
    updateTime = () => {
        let { time } = this.state;
        if (time !== 0) {
            this.setState({ time: this.state.time - 1 })
        } else { clearInterval(this.timer) }
    }
    timer = () => {
        setInterval(() => {
            this.updateTime()
        }, 1000);
    }
    componentDidMount() {
        this.timer();
    }
    render() {
        let { time } = this.state;
        return (
            time !== 0 ?
                (
                    <div className='timer-box' >
                        time: {time}
                    </div>
                ) : (
                    <div className='timer-box' >
                        end of time!
                    </div>
                )
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.setState = (state, callback) => {
            return;
        }
    }
}

export default Timer;
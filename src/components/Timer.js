import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            endTime: this.props.time,

        }
    }
    updateTime = () => {
        let { time, endTime } = this.state;
        if (time < endTime + 1) {
            this.setState({ time: this.state.time + 1 })
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
        let { time, endTime } = this.state;
        console.log(time, endTime)
        return (time < endTime + 1 ? (
            <div style={{backgroundColor: 'pink'}}>
                time: {time} , endtime: {endTime}
            </div>
        ) : (<div style={{backgroundColor: 'pink'}}>end of time!</div>
        )
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

export default Timer;
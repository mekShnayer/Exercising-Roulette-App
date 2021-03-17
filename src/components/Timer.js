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
        if (time < endTime+1) {
            this.setState({ time: this.state.time + 1 })
            console.log('added!',time)
        }else{clearInterval(this.timer)}
    }
    timer = () => {
        setInterval(() => {
            this.updateTime()
        }, 1000);
    }
    componentDidMount(){
        this.timer();
    }
    render() {
        let { time, endTime } = this.state;
        

        return (time < endTime+1 ? (
            <div>
                time: {time} , endtime: {endTime}
            </div>
        ) : (<div>end of time!</div>
        )
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

export default Timer;
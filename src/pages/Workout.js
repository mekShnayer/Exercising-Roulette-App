import React from 'react';
import Timer from '../components/Timer';

const rest = { name: 'rest', visual: 'rest photo', time: 10 };
let legworkout = [
    { name: '1', visual: '', time: 20 },
    rest,
    { name: '2', visual: '', time: 30 },
    rest,
    { name: '3', visual: '', time: 20 },
    rest,
    { name: '4', visual: '', time: 20 },
    rest,
    { name: '5', visual: '', time: 20 },
    rest,
    { name: '6', visual: '', time: 20 },
    rest,
    { name: '7', visual: '', time: 20 },
    rest,
    { name: '8', visual: '', time: 20 },
    rest,
]
class Workout extends React.Component {
    constructor() {
        super();
        this.state = {
            exerciseArr: legworkout,
            index: 0,
            
        }
    }
    updateIndex = () => {
        let { index, exerciseArr } = this.state;
        let time = exerciseArr[index].time;
        if (index <= exerciseArr.length - 2) {
            this.setState({ index: index + 1 })
            console.log('set state success')
        } else { clearInterval(this.updateInterval) }
    }
    updateInterval = () => {
        let { index, exerciseArr } = this.state;
        let time = exerciseArr[index].time;
        setInterval(() => {
            this.updateIndex()
        }, time * 1000);
    }
    componentDidMount() {
        // let { index, exerciseArr } = this.state;

        this.updateInterval();

    }


    render() {
        let { exerciseArr, index } = this.state;
        let name = exerciseArr[index].name;
        let visual = exerciseArr[index].visual;
        let time = exerciseArr[index].time;
console.log(index)
        return (
            <div>
                {/* <Timer time={exerciseArr[index].time} /> */}
                <div>
                {/* <Timer time={exerciseArr[index].time} /> */}
                    <div key={index}>
                        <h1>exercise name : {name}</h1>
                        <div> exercise visual : {visual}</div>
                        <h2>exercise time : {time}</h2>
                        <Timer time={time} />
                    </div>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }
}

export default Workout;
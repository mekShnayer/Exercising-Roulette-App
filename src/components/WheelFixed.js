import React from 'react';
import './WheelFixed.css';
import Dialog from './Dialog';

const exercises = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
]

let winnerItem;
class WheelFixed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen : false,
            items: exercises, //or this.props.exerciseArr-depands where i puth the array
            shouleStartSpinning: false,
            spinningDuration: 4,
            selectedItem: null,
            onButtonClick: () => {
                winnerItem = Math.floor(Math.random() * this.state.items.length);
                this.setState({ selectedItem: winnerItem, shouleStartSpinning: true })

            }
        }
    }

    render() {
        
        if (this.state.shouleStartSpinning) {
            setTimeout(() => {
                this.setState({ shouleStartSpinning: false, selectedItem: null ,isDialogOpen:true})
                console.log(winnerItem)
                console.log(
                    `you won ${this.state.items[winnerItem]} exercise!`)
            }, this.state.spinningDuration * 1000)
            //this makes the design return to it's start point and not continue from the last position.
        }
        
        const wheelVars = {
            '--nb-item': this.state.items.length,
            '--selected-item': this.state.selectedItem,
            '--spinning-duration': `${this.state.spinningDuration}s`,
        }
        return (
            <div className="wheel-container">
            {this.state.isDialogOpen?<Dialog winnerItem={this.state.items[winnerItem]}/>:''}
                <div className="triangle-down"></div>
                <div className={`wheel ${this.state.shouleStartSpinning ? 'spinning' : ''}`}
                    style={wheelVars}
                // onClick={onWheelClicked}
                >
                    {this.state.items.map((item, index) => (
                        <div className="wheel-item" key={index}
                            style={{ '--item-nb': index }}>
                            {item}
                        </div>
                    ))}
                </div>
                <button onClick={this.state.onButtonClick}>
                    spin
                </button>
            </div>
        )
    }
}

export default WheelFixed;
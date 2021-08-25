import React from 'react';
import './WellDoneComponent.css';

const encoragePhrases = ['well done!', 'you did it!', 'hurray!', 'just did it!',];

class WellDoneComponent extends React.Component {
    render() {
        return ( 
            <div className='wellDone-page'>
                <div className='wellDone-box'>
                    <h1>{encoragePhrases[0]}</h1>
                    {/* should change the index everytime it opens up to random one */}
                    <h2>you have completed {this.props.workout} workout</h2>
                    <div className='stats'>
                        <p>
                            stats:
                            workout completed so far: ___
                        </p>
                    </div>

                    <div>share div: photo, share to facebook</div>
                    <button className='close' onClick={this.props.onClose}>X</button>
                </div>
            </div>

        )
    }
}
export default WellDoneComponent;
import React from 'react';

const encoragePhrases = ['well done!', 'you did it!', 'hurray!', 'just did it!',];

class WellDoneComponent extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>{encoragePhrases[0]}</h1> 
                {/* should change the index everytime it opens up to random one */}
                <h2>you have completed {this.props.workout} workout</h2>
                <p>
                    stats:
                    workout completed so far: ___
                </p>
                <div>share div: photo, share to facebook</div>

            </div>
        )
    }
}
export default WellDoneComponent;
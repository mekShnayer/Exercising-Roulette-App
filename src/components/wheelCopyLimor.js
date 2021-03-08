import React from 'react';

import * as utils from '../../utils'
import clsx from 'clsx'

function Wheel({
    items,
    shouldStartSpinning,
    onWheelClicked,
    onSpinningFinished,
}) {
    const spinningDuration = 4  // In seconds

    let selectedItem = null
    if (shouldStartSpinning) {
        // Pick a random wheel item and notify it once the spinning finished
        selectedItem = utils.randomBetweenZeroAndNumber(items.length)
        setTimeout(() => {
            onSpinningFinished(selectedItem)
        }, spinningDuration * 1000)
    }

    const wheelVars = {
        '--nb-item': items.length,
        '--selected-item': selectedItem,
        '--spinning-duration': `${spinningDuration}s`,
    }
    return (
        <div className="wheel-container">
            <div className={clsx('wheel',
                shouldStartSpinning && 'spinning')}
                style={wheelVars}
                onClick={onWheelClicked}>
                {items.map((item, index) => (
                    <div className="wheel-item" key={index}
                        style={{ '--item-nb': index }}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wheel
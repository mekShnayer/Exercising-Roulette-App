import React, { createFactory } from 'react';
import Wheel from '../components/Wheel';
import { ThemeContext } from '../context/ThemeContext';

function HomeRoulette() {
    return (
        <ThemeContext.Consumer>
            {(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div >
                        {/* <div className='filter-box' style={{ background: theme.ui, color: theme.syntax }}> filter-box component: tabata / reps / random</div> */}
                        <Wheel />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default HomeRoulette;
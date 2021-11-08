// import React, { createFactory } from 'react';
import ChooseExercise from '../components/ChooseExercise';
import Wheel from '../components/Wheel';
import { GlobalStateContext } from '../context/GlobalStateContext';
import { ThemeContext } from '../context/ThemeContext';

function HomeRoulette() {
    return (
        <ThemeContext.Consumer>
            {(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <GlobalStateContext.Consumer>
                        {(GlobalContext) => {
                            
                            return (
                                <div >
                                    {/* <div className='filter-box' style={{ background: theme.ui, color: theme.syntax }}> filter-box component: tabata / reps / random</div> */}
                                    <Wheel />
                                    <ChooseExercise />
                                </div>
                            )
                        }}
                    </GlobalStateContext.Consumer>

                )
            }}
        </ThemeContext.Consumer>
    )
}
export default HomeRoulette;
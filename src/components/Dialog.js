import React from 'react';
import './Dialog.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

class Dialog extends React.Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);//it logs it twice! need to check what's wrong!!!
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        const { winnerItemTitle, winnerItem } = this.props
        return (
            <div className='dialog-page' >
                <div className='dialog-box'
                    style={{ background: theme.ui, color: theme.syntax }}>
                    <div>
                        <h1>Ready to start {winnerItemTitle} exercise?</h1>
                        <div className='dialog-answers-box'>
                            <button>
                                <Link to={{pathname: '/workout', search: `?workoutId=${winnerItem}`}}
                                    style={{ textDecoration: 'none', color: 'black' }}>
                                    YES! let's go!
                                </Link>
                            </button>
                            <button onClick={this.props.onClose}>Nope, let's try again</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog;
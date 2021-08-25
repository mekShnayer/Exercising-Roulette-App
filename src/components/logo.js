import React from 'react';
import './logo.css'
class Logo extends React.Component {
    render() {
        return (
            <div id='logo'>
                <img src={this.props.src} alt='something' width='200px' />
            </div>
        )
    }
}
export default Logo;
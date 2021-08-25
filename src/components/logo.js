import React from 'react';
import './logo.css'
class Logo extends React.Component {
    render() {
        return (

            <img src={this.props.src} alt='something'
                id='logo'
            />
        )
    }
}
export default Logo;
import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src} alt='something' width='200px' />
            </div>
        )
    }
}
export default Logo;
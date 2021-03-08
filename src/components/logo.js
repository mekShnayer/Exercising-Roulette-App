import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src} width='200px' />
            </div>
        )
    }
}
export default Logo;
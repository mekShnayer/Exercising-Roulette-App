import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.src} />
            </div>
        )
    }
}
export default Logo;
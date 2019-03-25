import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

// TODO: needs to be reworked
class Button extends React.Component {
    render() {
        return (
            <Link className={this.props.className} to="/">{this.props.children}</Link>
        );
    }
}

export default Button;
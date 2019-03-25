import React from 'react';

import Button from '../../components/Button/Button.js';

import './list-header.scss';

class ListHeader extends React.Component {
    render() {
        return (
            <div className="list-header">
                <div className="row">
                    <div className="list-header__col">
                        list-header
                    </div>
                </div>
            </div>
        );
    }
}

export default ListHeader;
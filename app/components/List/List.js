import React from 'react';

import ListItem from '../../components/ListItem/ListItem.js';

import './list.scss';

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="row">
                    <div className="list__col">
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
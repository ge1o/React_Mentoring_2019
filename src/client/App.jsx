import React, { Component, memo } from 'react';

const title = React.createElement('h2', {}, 'createElement way');

class App extends Component {
    render() {
        return (
            <div>
                <h2>React component way</h2>
                {title}
            </div>
        );
    }
}

class ReactFooter extends React.PureComponent {
    render() {
        return (
            <h2>
                Pure component way
            </h2>
        )
    }
}

function ReactHeader() {
    return (
        <h2>
            Functional way
        </h2>
    )
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>React component way with memo();</h2>
            </div>
        );
    }
}

export default App;
// export default {ReactFooter};
// export default ReactHeader;
// export default Content;
// export default memo(Content);
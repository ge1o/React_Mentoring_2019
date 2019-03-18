import React, {Component, memo} from 'react';

const title = React.createElement('h2', {}, 'createElement way');

class App extends Component {
    render() {
        return (
            <>
            <div class="wrapper">

                <header class="header">
                    header
                </header>

                <main class="content">
                    {process.env.NODE_ENV} mode
                </main>

            </div>

            <footer class="footer">
                footer
            </footer>
            </>
        );
    }
}

export default App;

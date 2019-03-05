import React, { Component } from 'react';
import './App.css';
import { AppContext } from './components/AppContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <div>Empty div</div>
          <Test />
        </>
      </div>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Username: {context.state.username}</p>
              <button>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default App;

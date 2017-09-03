import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from './Menu'
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

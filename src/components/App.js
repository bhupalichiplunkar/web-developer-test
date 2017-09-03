import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from './Menu'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Menu />
          <RaisedButton label="Material UI" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
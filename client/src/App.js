import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
          
            <Route exact path="/" component={Landing} />
            </div>
            </Switch>
          </BrowserRouter>

    );
  }
}

export default App;

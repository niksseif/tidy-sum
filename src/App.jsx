import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expense from './components/Expense';
import Balance from './components/Balance';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div
        style={{ marginTop: '1vw', marginLeft: '1vw', marginRight: '1vw' }}
      >
        <Route exact path="/" component={Landing} />
        <div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/income" component={Income} />
          <Route path="/dashboard/expense" component={Expense} />
          <Route path="/dashboard/balance" component={Balance} />
        </div>
      </div>
    </Switch>
  </BrowserRouter>
);

export default App;

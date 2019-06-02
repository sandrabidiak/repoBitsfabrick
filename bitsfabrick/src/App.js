import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PlotList from './components/PlotList';
import PlotDetail from './components/PlotDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PlotList} />
        <Route path="/create" component={PlotDetail} /> 
        <Route path="/:id" component={PlotDetail} />
        <Route path="/" render={() => (<Redirect to="/" />)} />
      </Switch>
    </div>
  );
}

export default App;

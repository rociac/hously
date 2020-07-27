import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HouseList from './HouseList';
import Login from './Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HouseList} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;

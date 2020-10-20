import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Config from '../pages/Config';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/settings" component={Config} />
    </Switch>
  );
};

export default Routes;

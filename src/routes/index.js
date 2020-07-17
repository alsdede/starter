import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Routes';
import HomePage from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

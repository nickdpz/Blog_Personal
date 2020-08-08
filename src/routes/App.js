import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'

const App = (isLogged) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={isLogged ? Home : Login} />
      <Route exact path="/post" component={isLogged ? Home : Login} />
      <Route exact path="/category/:categoryId" component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
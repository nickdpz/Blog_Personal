import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoryDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Buy from '../pages/Buy';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={isLogged ? Home : Login} />
      <Route exact path="/post" component={isLogged ? Home : Login} />
      <Route exact path="/category/:productId" component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
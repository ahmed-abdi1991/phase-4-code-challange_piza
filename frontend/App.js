import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantsList from './RestaurantsList';
import RestaurantDetail from './RestaurantDetail';
import PizzasList from './PizzasList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/restaurants/:id" component={RestaurantDetail} />
        <Route path="/restaurants" component={RestaurantsList} />
        <Route path="/pizzas" component={PizzasList} />
      </Switch>
    </Router>
  );
}

export default App;
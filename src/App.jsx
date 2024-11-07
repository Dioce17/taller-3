import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ApiResults from './pages/ApiResults';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/results">
          {isAuthenticated ? <ApiResults /> : <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <h1>404 - Página no encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
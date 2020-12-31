import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';
import  LoginContextProvider  from './components/LoginContext';

function App() {
  return (
    <Router>
      <div className="App">
        <LoginContextProvider>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Body />
            </Route>
          </Switch>
          <Footer />
        </LoginContextProvider>
      </div>
    </Router>
  );
}

export default App;

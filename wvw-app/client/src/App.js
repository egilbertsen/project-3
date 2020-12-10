import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
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
        {/* <Footer/> goes here */}
      </div>
    </Router>
  );
}

export default App;

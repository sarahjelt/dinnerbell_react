import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './containers/Home/Home';
// import { NoMatch } from './containers/NoMatch/NoMatch';
import Calendar from './containers/Calendar/Calendar';
import Saved from './containers/Saved/Saved';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/saved' component={Saved} />
            {/*<Route component={NoMatch} />*/}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

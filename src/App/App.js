import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import HappyHours from '../HappyHours/HappyHours';
import CreateAccount from '../CreateAccount/CreateAccount';
import Login from '../Login/Login';
import './App.css';
import Nav from '../Nav/Nav';


class App extends Component {

  render() {

    return(
      <div className='row'>

          <div>
            <Nav />
          </div>

          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/HappyHours' component={HappyHours} />
              <Route path='/CreateAccount' component={CreateAccount} />
              <Route path='/Login' component={Login} />
            </Switch>
          </div>
      </div>
    )
  }
}


export default App;

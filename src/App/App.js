import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserContext, {UserContextProvider} from '../UserContext'
import Home from '../Home/Home';
import About from '../About/About';
import HappyHours from '../HappyHours/HappyHours';
import CreateAccount from '../CreateAccount/CreateAccount';
import Login from '../Login/Login';
import './App.css';
import Nav from '../Nav/Nav';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
    }
  }

  render() {

    return(
      <div className='row'>
        <UserContextProvider>
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
          </UserContextProvider>
      </div>
    )
  }
}


export default App;

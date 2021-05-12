import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {UserContextProvider} from '../UserContext'
import Home from '../Home/Home';
import About from '../About/About';
import HappyHours from '../HappyHours/HappyHours';
import CreateAccount from '../CreateAccount/CreateAccount';
import Login from '../Login/Login';
import './App.css';
import Nav from '../Nav/Nav';
import PrivateRoute from '../Utils/PrivateRoute';
import NotFound from '../NotFound/NotFound';
import EditUserData from '../HappyHours/files/EditUserData';
import AddNewWeek from '../HappyHours/files/AddNewWeek';
import AccountSettings from '../HappyHours/files/AccountSettings';
import TakeHappyHours from '../HappyHours/files/TakeHappyHours';


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
          
            <Nav />
          

          <div className='routes'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/CreateAccount' component={CreateAccount} />
              <Route path='/Login' component={Login} />
              <PrivateRoute path='/HappyHours' component={HappyHours} />
              <PrivateRoute path='/HHEdit' component={EditUserData} />
              <PrivateRoute path='/ANW' component={AddNewWeek} />
              <PrivateRoute path='/AccountSettings' component={AccountSettings} />
              <PrivateRoute path='/TakeHappyHours' component={TakeHappyHours} />

              <Route component={NotFound} />
            </Switch>
          </div>
          </UserContextProvider>
      </div>
    )
  }
}


export default App;

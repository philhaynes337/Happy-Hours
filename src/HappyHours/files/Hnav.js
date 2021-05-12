import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogOut from './LogOut';
import './css/Hnav.css'

//                <Link to={'/AccountSettings'}>Account Settings</Link>| 
class Hnav extends Component {

    render() {

        return(
            <div className='hnav'>

             
                    <Link to={'/HappyHours'}>View Entries</Link>|  
             
                    <Link to={'/ANW'}>Add New Week</Link>|  
           
                    <Link to={'/TakeHappyHours'}>Use Happy Hours</Link>
          
                <div className='hnavLogout'><LogOut /></div>
               
            </div>
        )
    }
}

export default Hnav
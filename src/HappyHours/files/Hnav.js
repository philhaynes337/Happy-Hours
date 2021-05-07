import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogOut from './LogOut';
import './css/Hnav.css'


class Hnav extends Component {

    render() {

        return(
            <div className='hnav'>
               <Link to={'/HappyHours'}>View Entries</Link>|  
               <Link to={'/ANW'}>Add New Week</Link>|  
               <Link to={'/TakeHappyHours'}>Use Happy Hours</Link>| 
               <Link to={'/AccountSettings'}>Account Settings</Link>| 
               <LogOut />
            </div>
        )
    }
}

export default Hnav
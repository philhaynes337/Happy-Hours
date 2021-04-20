import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
    render() {

        return(
            <div>
                <div className='col'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='col'>
                    <Link to='/About'>About</Link>
                </div>
                <div className='col'>
                    <Link to='/HappyHours'>Happy Hours</Link>
                </div>
                <div className='col'>
                    <Link to='/CreateAccount'>Create Account</Link>
                </div>
                <div className='col'>
                    <Link to='/Login'>Login</Link>
                </div>
            </div>
        )
    }
}

export default Nav
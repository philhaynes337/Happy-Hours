import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {
    render() {

        return(
            <div className='nav'>

                <div className='desktop'>
                    <div className='coln'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='coln'>
                        <Link to='/About'>About</Link>
                    </div>
                    <div className='coln'>
                        <Link to='/HappyHours'>Happy Hours</Link>
                    </div>
                    <div className='coln'>
                        <Link to='/CreateAccount'>Create Account</Link>
                    </div>
                    <div className='coln'>
                        <Link to='/Login'>Login</Link>
                    </div>
                </div>

            <div className='mobile'>
                <div className='spans'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='mobile-nav'>
                    <div className='coln'>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className='coln'>
                            <Link to='/About'>About</Link>
                        </div>
                        <div className='coln'>
                            <Link to='/HappyHours'>Happy Hours</Link>
                        </div>
                        <div className='coln'>
                            <Link to='/CreateAccount'>Create Account</Link>
                        </div>
                        <div className='coln'>
                            <Link to='/Login'>Login</Link>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Nav
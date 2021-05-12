import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Config from '../../config';

class LogOut extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handleLogOut = e => {
        e.preventDefault();


        const jwtw = window.sessionStorage.getItem('TOKEN_KEY')

        const jwt = {token: jwtw}


        const loggedInUrl = `${Config.API_ENDPOINT}/success/step`

        const loggedInOptions = {
            method: 'POST',
            body: JSON.stringify(jwt),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${Config.API_KEY}`
            }
        }

        fetch(loggedInUrl, loggedInOptions)
            .then(res => res.json())
            .then(usid => {
                this.setState({
                    usid: usid.usid[0].usid,
                })

                const data = {
                    usid: this.state.usid,

                }

                const logoutApiUrl = `${Config.API_ENDPOINT}/success/steptwo`

                const logoutOptions = {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${Config.API_KEY}`,
                    }
                }

                fetch(logoutApiUrl, logoutOptions)
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(error => {
                                throw error
                            })
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })

            window.sessionStorage.clear()
            window.location.reload(false)

        
    }

    render() {

        return(
            <>
            <Link onClick={this.handleLogOut} to={'/Login'}>
                Log Out
                </Link>
            </>
        )
    }
}
LogOut.contextType = UserContext;

export default LogOut
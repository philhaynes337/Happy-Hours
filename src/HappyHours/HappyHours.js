import React, { Component } from 'react';
import Hnav from './files/Hnav';
import { UserContext } from '../UserContext';
import Config from '../config';


class HappyHours extends Component {
    //static contextType = UserContext;

    state = {
        error: 'No Error',
    }

    componentDidMount() {

        const { userid } = this.context
        const startUrl = `${Config.API_ENDPOINT}/success/${userid}`

        const startOptions = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${Config.API_KEY}`,
            }
        }
        console.log(startUrl)
        
        fetch(startUrl, startOptions)
            .then(res => res.json())
            .then(data => {
                //set State at this point
                let abc = data.error
                console.log(data.error)
                if(abc === undefined) {
                    console.log('data is undefined')
                    this.setState({
                        error: 'No Error'
                    })
                }else {
                this.setState({
                   
                    error: data.error
                })
            }
            })
            .catch(err => {
                console.log(err)

            })
    }


    render() {
        
        const {userName, token, userid} = this.context;
        const { error } = this.state;


        return(
            <div>
                
               
                <nav>
                    <Hnav />
                </nav>
                <section>
                    <h2>Welcome  {userName}!</h2>
                    <p>Token: {token}</p>
                    <p>UserId: {userid}</p>
                    <p>Error Status: {error}</p>
                </section>
                
                
            </div>
        )
    }
}
HappyHours.contextType = UserContext;

export default HappyHours
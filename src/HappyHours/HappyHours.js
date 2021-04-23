import React, { Component } from 'react';
import Hnav from './files/Hnav';
import { UserContext } from '../UserContext';
import Config from '../config';
import UserData from './files/UserData';



class HappyHours extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            user: [],
        }
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
        
        
        fetch(startUrl, startOptions)
            .then(res => res.json())
            .then(data => {
                //set State at this point
       
                this.setState({
                   
                    error: data.error,
                    user: data
                })
            
            })
            .catch(err => {
                console.log(err)

            })
    }


    render() {
        
        const {userName} = this.context;
        const { user } = this.state;
        //console.log(user)

        return(
            <div>
                
               
                <nav>
                    <Hnav />
                </nav>
                <section>
                    <h2>Welcome  {userName}!</h2>
                </section>
                <section>
                    <UserData data={user} />
                </section>
                
                
            </div>
        )
    }
}
HappyHours.contextType = UserContext;

export default HappyHours
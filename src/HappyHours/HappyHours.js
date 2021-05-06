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
            usid: '',
        }
    }



    componentDidMount() {
        
        const loggedInUrl = `${Config.API_ENDPOINT}/success/step`

        const wToken = window.sessionStorage.getItem('TOKEN_KEY')

        const JWT = {token: wToken}
        

        const loggedInOptions = {
            method: 'POST',
            body: JSON.stringify(JWT),
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

                const {setUserId} = this.context
                setUserId(this.state.usid)


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

                const happyHours = data.map(datam => {
                    // console.log(data.totalhours)
         
                     const totalHappyHours = parseInt(datam.totalhours)
         
                     let totalIntHappyHours
                     if (datam.totalhours <= 40) {
                         totalIntHappyHours = 0
                     }else {
                         totalIntHappyHours = totalHappyHours - 40
                     }
         
                     //console.log(totalIntHappyHours)
                     return totalIntHappyHours
                 })
         
                 let sumOfHappyHours = happyHours.reduce(function(a, b) {
                     return a + b
                 }, 0)


                //set State at this point
       
                this.setState({
                   
                    error: data.error,
                    user: data,
                    hours: data.totalhours,
                    sumOfHappyHours: sumOfHappyHours,
                })
                const stepTwoData = {
                    id: this.state.usid,
                    life_time_happyhours: this.state.sumOfHappyHours,
                }
                //console.log(stepTwoData)

                const stepTwoOptions = {
                    method: 'PATCH',
                    body: JSON.stringify(stepTwoData),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${Config.API_KEY}`,
                    }
                }

                const stepTwo = `${Config.API_ENDPOINT}/success/steptwo`

                fetch(stepTwo, stepTwoOptions)
                    .then(res => res.json())
                    //.then()
                    .catch(error => {
                        //console.log(error)
                    })

            
            })
            .catch(err => {
                console.log(err)

            })




            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        
        const {userName} = this.context;
        const { user } = this.state;

        const token = this.context.token

        const { sumOfHappyHours } = this.state

        return(
            <div>
                
               
                <nav>
                    <Hnav />
                </nav>
                <section>
                    <h2>Welcome  {userName}!</h2>
                </section>
                <section>
                    Life Time Happy Hours: {sumOfHappyHours}
                </section>
                <section>
                    Current Balance: 
                </section>
                <section>
                    Total Used: 
                </section>
                <section>
                    <UserData data={user} token={token} />
                </section>
                
                
            </div>
        )
    }
}
HappyHours.contextType = UserContext;

export default HappyHours
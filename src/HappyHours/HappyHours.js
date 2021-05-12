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
                //INSERT HERE


                const idata = {id: userid}


                const stepThreeUrl = `${Config.API_ENDPOINT}/success/stepthree`
        
                const stepThreeOptions = {
                    method: 'POST',
                    body: JSON.stringify(idata),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${Config.API_KEY}`,
                    }
                }
                
    
                fetch(stepThreeUrl, stepThreeOptions)
                .then(res => res.json())
                .then(data => {
    
                    //console.log('Data.HappyHours: ' + data[0].happyhours)
                    this.setState({
                        happyhours: data[0].happyhours,
                        happyhours_used: data[0].happyhours_used,
                        life_time_happyhours: data[0].life_time_happyhours,
                        userName: data[0].user_name
                    })
                    //console.log(this.state)
    
    
                })





                //Do NOT EDIT BELOW
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
                    
         
                     const totalHappyHours = parseInt(datam.totalhours)
         
                     let totalIntHappyHours
                     if (datam.totalhours <= 40) {
                         totalIntHappyHours = 0
                     }else {
                         totalIntHappyHours = totalHappyHours - 40
                     }
         
                     
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
                    .catch(error => {
                        this.setState({
                            error: error,
                        })
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
        
        const { user } = this.state;

        const token = this.context.token

        const { sumOfHappyHours, happyhours_used, userName } = this.state

        let balance = sumOfHappyHours - happyhours_used


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
                    Current Balance: {balance}
                </section>
                <section>
                    Total Used: {happyhours_used}
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
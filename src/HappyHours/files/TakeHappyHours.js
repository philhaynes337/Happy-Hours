import React, { Component } from 'react';
import Hnav from './Hnav';
import Config from '../../config';
import { UserContext } from '../../UserContext';
import './css/TakeHappyHours.css';

class TakeHappyHours extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    handelTakeTimeOff = e => {
        e.preventDefault();

        const { takehours } = e.target
        console.log('Takehours: ' + takehours.value)

        const happyhours_used = parseInt(this.state.happyhours_used) + parseInt(takehours.value)

        console.log('Client Happy Hours: ' + happyhours_used)

        const stepUrl = `${Config.API_ENDPOINT}/success/stepfour`

        const stepData = {
            happyhours_used: happyhours_used,
             id: this.state.usid,

            }

        const stepOptions = {
            method: 'PATCH',
            body: JSON.stringify(stepData),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${Config.API_KEY}`
            }
        }

        fetch(stepUrl, stepOptions)
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

            this.props.history.push('/HappyHours')
        
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
                happyhours: 0,
                happyhours_used: 0,
                life_time_happyhours: 0,
            })

            const {setUserId} = this.context
            setUserId(this.state.usid)

            const { userid } = this.context

            const idata = {id: userid}


            const startUrl = `${Config.API_ENDPOINT}/success/stepthree`
    
            const startOptions = {
                method: 'POST',
                body: JSON.stringify(idata),
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${Config.API_KEY}`,
                }
            }
            

            fetch(startUrl, startOptions)
            .then(res => res.json())
            .then(data => {

                //console.log('Data.HappyHours: ' + data[0].happyhours)
                this.setState({
                    happyhours: data[0].happyhours,
                    happyhours_used: data[0].happyhours_used,
                    life_time_happyhours: data[0].life_time_happyhours,
                })
               
                let balance = parseInt(this.state.life_time_happyhours) - parseInt(this.state.happyhours_used) 
                console.log()
                if (balance < 1) {
                    this.setState({
                        zeroBalance: 'No Happy Hours!',
                    })
                }else {
                    this.setState({
                        zeroBalance: 'Take Time Off!'
                    })
                }
        

            })
            
        })



    }



    

    render() {

        const { happyhours, happyhours_used, life_time_happyhours, zeroBalance } = this.state;

        let balance = life_time_happyhours - happyhours_used

        let parseBalance = parseInt(balance)

        



        return(
            <div>
                <Hnav />

                Take Happy Hours Component
                <br />

                <section>
                    <p>
                        Current Balance is: {parseBalance}
                    </p>
                    <p>
                        Happy Hours Used: {happyhours_used}
                    </p>
                    <p>
                        Life Time: {life_time_happyhours}
                    </p>
                    <div>
                        <form onSubmit={this.handelTakeTimeOff}>
                            <div>
                                Hours to take:
                            </div>
                            <div>
                                <input type='number' min='1' max={parseBalance} name='takehours' id='takehours' required />
                            </div>
                            <div>
                                <button type='submit' className='tto-submit'>{zeroBalance}</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
TakeHappyHours.contextType = UserContext;

export default TakeHappyHours
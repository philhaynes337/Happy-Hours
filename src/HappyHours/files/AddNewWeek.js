import React, { Component } from 'react';
import { UserContext } from '../../UserContext';
import Hnav from './Hnav';
import config from '../../config'
import './css/AddNewWeek.css'

class AddNewWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usid: '',
        }
    }






    handleSubmitNewWeek = e => {
        e.preventDefault();
        //console.log('Submit New Entry Pressed')
        const {date, day1, day2, day3, day4, day5, day6, day7, day1b, day2b, day3b, day4b, day5b, day6b, day7b} = e.target

        const totalHours = parseInt(day1.value) + parseInt(day2.value) + parseInt(day3.value) + parseInt(day4.value) + parseInt(day5.value) + parseInt(day6.value) + parseInt(day7.value);

        const data = {
            usid: this.state.usid,
            weekstart: date.value,
            day1: day1.value,
            day2: day2.value,
            day3: day3.value,
            day4: day4.value,
            day5: day5.value,
            day6: day6.value,
            day7: day7.value,
            day1b: day1b.value,
            day2b: day2b.value,
            day3b: day3b.value,
            day4b: day4b.value,
            day5b: day5b.value,
            day6b: day6b.value,
            day7b: day7b.value,
            totalhours: totalHours,
        }

        const apiUrl = `${config.API_ENDPOINT}/success/${this.state.usid}`

        const headerOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        }

        fetch(apiUrl, headerOptions)
            .then()
            .then()
            .catch(error => {
                console.log(error)
            })

    }



    componentDidMount() {
        const loggedInUrl = `${config.API_ENDPOINT}/success/step`

        const wToken = window.sessionStorage.getItem('TOKEN_KEY')

        const JWT = {token: wToken}
        

        const loggedInOptions = {
            method: 'POST',
            body: JSON.stringify(JWT),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }

        fetch(loggedInUrl, loggedInOptions)
            .then(res => res.json())
            .then(usid => {


                this.setState({
                    usid: usid.usid[0].usid,
                })




            })
            .catch(error => {
                console.log(error)
            })


    }




    render() {

        //const {userid} = this.context
        const {usid} = this.state
        //console.log(this.context)
        //console.log('This is the State os USID: ' + usid)

        return(
            <div>
                <Hnav />
                <section>
                    <p>
                    You may leave the days and bonus blank and edit later. <b>Must have the week start!</b>
                    </p>
                    <p>user id: {usid}</p>
                </section>
                <form name='Add Entry' onSubmit={this.handleSubmitNewWeek}>
                <div className=''>
                    Week Start: (Format: YYYY-MM-DD)
                </div>
                <div className=''>
                    <input type='date' name='date' id='date' defaultValue='YYYY-MM-DD' />
                </div>

                <div className=''>
                    Day1
                </div>
                <div className=''>
                    <input type='text' id='day1' name='day1' defaultValue='0' />
                </div>

                <div className=''>
                    Day2
                </div>
                <div className=''>
                    <input type='text' id='day2' name='day2' defaultValue='0' />
                </div>

                <div className=''>
                    Day3
                </div>
                <div className=''>
                    <input type='text' id='day3' name='day3' defaultValue='0' />
                </div>

                <div className=''>
                    Day4
                </div>
                <div className=''>
                    <input type='text' id='day4' name='day4' defaultValue='0' />
                </div>

                <div className=''>
                    Day5
                </div>
                <div className=''>
                    <input type='text' id='day5' name='day5' defaultValue='0' />
                </div>

                <div className=''>
                    Day6
                </div>
                <div className=''>
                    <input type='text' id='day6' name='day6' defaultValue='0' />
                </div>

                <div className=''>
                    Day7
                </div>
                <div className=''>
                    <input type='text' id='day7' name='day7' defaultValue='0' />
                </div>

                
                <div className=''>
                    Day1 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day1b' name='day1b' defaultValue='0' />
                </div>
                                
                <div className=''>
                    Day2 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day2b' name='day2b' defaultValue='0' />
                </div>

                                
                <div className=''>
                    Day3 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day3b' name='day3b' defaultValue='0' />
                </div>

                                
                <div className=''>
                    Day4 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day4b' name='day4b' defaultValue='0' />
                </div>

                                
                <div className=''>
                    Day5 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day5b' name='day5b' defaultValue='0' />
                </div>
                                
                <div className=''>
                    Day6 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day6b' name='day6b' defaultValue='0' />
                </div>
                                
                <div className=''>
                    Day7 Bonus
                </div>
                <div className=''>
                    <input type='text' id='day7b' name='day7b' defaultValue='0' />
                </div>


                <div>
                    <button type='submit' className='snw-button'>Submit New Week</button>
                </div>
                </form>

            </div>
        )
    }
}
AddNewWeek.contextType = UserContext


export default AddNewWeek
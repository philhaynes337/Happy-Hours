import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import { UserContext } from '../../UserContext';
import config from '../../config'
import './css/EditUserData.css'

class EditUserData extends Component {
    constructor(props) {
        super(props)
        this.state= {
            showEditModal: 'noShow',
            data: props.data,
            token: props.token,
            editText: 'Edit',
        }
    }



    handleCloseButton = e => {
        e.preventDefault();
    

        this.setState({
            showEditModal: 'noShow',
        })
        
        
       
    }

    
    handleEditButton = (e) => {
        e.preventDefault();
       
        this.setState({
            showEditModal: 'show',
            editText: 'Updating',
        })
     }

     handleUpdateButton = e => {
         e.preventDefault();
         

        const {date, day1, day1b, day2, day2b, day3, day3b, day4, day4b, day5, day5b, day6, day6b, day7, day7b} = e.target

        const totalHours = parseInt(day1.value) + parseInt(day2.value) + parseInt(day3.value) + parseInt(day4.value) + parseInt(day5.value) + parseInt(day6.value) + parseInt(day7.value);
        console.log(totalHours)
        const data = {
            usid: this.props.data.usid,
            id: this.props.data.id,
            weekstart: date.value,
            day1: day1.value,
            day1b: day1b.value,
            day2: day2.value,
            day2b: day2b.value,
            day3: day3.value,
            day3b: day3b.value,
            day4: day4.value,
            day4b: day4b.value,
            day5: day5.value,
            day5b: day5b.value,
            day6: day6.value,
            day6b: day6b.value,
            day7: day7.value,
            day7b: day7b.value,
            totalhours: totalHours,
        }
        console.log(data)
        const apiUrl = `${config.API_ENDPOINT}/success/${this.props.data.usid}`

        const headerOptions = {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        }

        fetch(apiUrl, headerOptions)
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
            this.setState({
                showEditModal: 'noShow',
                token: this.props.token,
                editText: 'Edit'
            })
     

            window.location.reload(true)
            


     }


    
    render() {
        const { data } = this.props;
        const { editText } = this.state;


        const weekStart = data.weekstart.substring(0,10)
       
        
        

        return (
            <div>
                <div>
                    <button onClick={this.handleEditButton} name='Edit Button'>
                                {editText}
                    </button>
                </div>
            <div className={this.state.showEditModal}>
                <div className='modal'>
             

                <form name='Update Entry' onSubmit={this.handleUpdateButton}>

                <div className='row'>
                    Week Start: (Format YYYY-MM-DD)
                </div>
                <div className='colum'>
                    <input type='text' name='date' id='date' defaultValue={weekStart} />
                </div>

                <div className='row'>
                    Day1:
                </div>
                <div className='colum'>
                    <input type='text' name='day1' id='day1' defaultValue={data.day1} />
                </div>

                <div className='row'>
                    Day1 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day1b' id='day1b' defaultValue={data.day1b} />
                </div>
                <div className='row'>
                    Day2:
                </div>
                <div className='colum'>
                    <input type='text' name='day2' id='day2' defaultValue={data.day2} />
                </div>

                <div className='row'>
                    Day2 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day2b' id='day2b' defaultValue={data.day2b} />
                </div>

                <div className='row'>
                    Day3:
                </div>
                <div className='colum'>
                    <input type='text' name='day3' id='day3' defaultValue={data.day3} />
                </div>

                <div className='row'>
                    Day3 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day3b' id='day3b' defaultValue={data.day3b} />
                </div>

                <div className='row'>
                    Day4:
                </div>
                <div className='colum'>
                    <input type='text' name='day4' id='day4' defaultValue={data.day4} />
                </div>

                <div className='row'>
                    Day4 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day4b' id='day4b' defaultValue={data.day4b} />
                </div>

                <div className='row'>
                    Day5:
                </div>
                <div className='colum'>
                    <input type='text' name='day5' id='day5' defaultValue={data.day5} />
                </div>

                <div className='row'>
                    Day5 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day5b' id='day5b' defaultValue={data.day5b} />
                </div>
                <div className='row'>
                    Day6:
                </div>
                <div className='colum'>
                    <input type='text' name='day6' id='day6' defaultValue={data.day6} />
                </div>

                <div className='row'>
                    Day6 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day6b' id='day6b' defaultValue={data.day6b} />
                </div>

                <div className='row'>
                    Day7:
                </div>
                <div className='colum'>
                    <input type='text' name='day7' id='day7' defaultValue={data.day7} />
                </div>

                <div className='row'>
                    Day7 Bonus:
                </div>
                <div className='colum'>
                    <input type='text' name='day7b' id='day7b' defaultValue={data.day7b} />
                </div>



                
                    <button type='submit'>
                        Update
                    </button>
                    </form>
                    
                        <button onClick={this.handleCloseButton} name='Exit Edit'>
                            Exit
                        </button>

                    </div>
                </div>
            </div>
  
        )

    }
}
EditUserData.contextType = UserContext

export default EditUserData
import React, { Component } from 'react';
import './css/UserData.css'
import EditUserData from './EditUserData';
import UserContext from '../../UserContext';


class UserData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.user,
            error: null,
            show: 'noShow'
        }
    }




    handleEditButton = (e) => {
        e.preventDefault();
       
        const {setEditButton} = this.context;

        setEditButton('EditUser');
     }



    render() {

        const { data } = this.props
 
        

        const showData = data.map(datau => {

            //only show year month day
            const newDate = datau.weekstart.substring(0,10)

            const totalHours = datau.day1 + datau.day2 + datau.day3 + datau.day4 + datau.day5 + datau.day6 + datau.day7

            const totalBonus = datau.day1b + datau.day2b + datau.day3b + datau.day4b + datau.day5b + datau.day6b + datau.day7b

            const happyHoursWeek = totalHours - 40

            return(

            <div key={datau.id} className='ud-row'>
                
                <div className='ud_row-w1'>
                    {newDate}
                    <div>
                        Bonus
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day1}
                    <div>
                        ${datau.day1b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day2}
                    <div>
                         ${datau.day2b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day3}
                    <div>
                         ${datau.day3b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day4}
                    <div>
                         ${datau.day4b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day5}
                    <div>
                        ${datau.day5b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day6}
                    <div>
                        ${datau.day6b}
                    </div>
                </div>
                <div className='ud-row-w'>
                    {datau.day7}
                    <div>
                        ${datau.day7b}
                    </div>
                </div>
                <div className='ud_row-w1'>
                    Total Hours: {totalHours}
                    <div>
                    Total Bonus: ${totalBonus}
                    </div>
                </div>
                <div className='ud_row-w1'>
                    Happy Hours: {happyHoursWeek}
                    <div>
                    
                    </div>
                </div>
                <div className='ud-row'>
                        {datau.id}
                            <button onClick={this.handleEditButton} name='Edit Button'>
                                Edit
                            </button>

                                <EditUserData id={datau.id} />
                                
                            
                        </div>
            </div>

            )
        })
        

        return(
            <div>
                User Data Component<br />
                {showData}
            </div>
        )
    }
}
UserData.contextType = UserContext;

export default UserData
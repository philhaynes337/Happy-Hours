import React, { Component } from 'react';
import config from '../../config';
//import './css/DeleteUserEntry.css'

class DeleteUserEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handelDeleteEntry = e => {
        e.preventDefault();

        

        const id = {id: this.props.data.id }
        const usid = this.props.data.usid
        

        const apiUrl = `${config.API_ENDPOINT}/success/${usid}`


        const headerOptions = {
            method: 'DELETE',
            body: JSON.stringify(id),
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
        .catch(error =>{
            console.log(error)
        })

        window.location.reload(false)
    }




    render() {


        return(
            <div>
                <form onSubmit={this.handelDeleteEntry}>
                    <button  className='udbtn'>Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteUserEntry
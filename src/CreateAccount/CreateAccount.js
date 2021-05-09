import React, { Component } from 'react';
import Config from '../config'
import './CreateAccount.css'



class CreateAccount extends Component {
    state = {
        error: null,
        user_password: '',
        user_password2: '',
    };

 

    handleSubmit = e => {
        e.preventDefault();
        const { user_password, user_password2 } = e.target

        if (user_password.value !== user_password2.value) {
            this.setState({ error: 'Passwords Do Not Match'})
        } else {

        const { user_name, user_email, user_password, user_ovts } = e.target

        const newUser = {
            user_name: user_name.value,
            user_password: user_password.value,
            user_email: user_email.value,
            user_ovts: user_ovts.value,
        }

        const apiUrl = `${Config.API_ENDPOINT}/create`

        const apiHeader = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${Config.API_KEY}`,
            }
        }
     


        this.setState({ error: null })

        fetch(apiUrl, apiHeader)
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw err
                })
            }
            return res.json()
        })
        .then (data => {
            user_name.value = ''
            user_password.value = ''
            user_email.value = ''
            user_ovts.value = '40'
        })
        .catch (res => {
            this.setState({error: res.error})
        })
    
        }

        this.props.history.push('/Login')
    }



    render() {

        const { error } = this.state;



        

        return(
            <div>
                <h2>Create New Account</h2>

                <form onSubmit={this.handleSubmit}>
                    <section className='create'>
                    <div>
                        {error}
                    </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                E-Mail:

                            </div>
                            <div className='create-c'>
                                <input type='text' name='user_email' id='user_email' defaultValue='E-mail' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                User Name:

                            </div>
                            <div className='create-c'>
                                <input type='text' name='user_name' id='user_name' defaultValue='User Name' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                Password:

                            </div>
                            <div className='create-c'>
                                <input type='password' name='user_password' id='user_password' defaultValue='password' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                Re-Type Password:

                            </div>
                            <div className='create-c'>
                                <input type='password' name='user_password2' id='user_password2' defaultValue='password2' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                Over Time Start:

                            </div>
                            <div className='create-c'>
                                <input type='text' name='user_ovts' id='user_ovts' defaultValue='40' required />
                            </div>
                        </div>
                        <div className='create-r'>
                            <div className='create-c'>

                                <button>Cancel</button>

                            </div>
                            <div className='create-c'>
                                <button>Create</button>
                            </div>
                        </div>
                    </section>

                </form>
            </div>
        )
    }
    }


export default CreateAccount
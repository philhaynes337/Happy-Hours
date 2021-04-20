import React, { Component } from 'react';
import './CreateAccount.css'



class CreateAccount extends Component {

    render() {

        return(
            <div>
                <h2>Create New Account</h2>

                <form onSubmit=''>
                    <section className='create'>

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
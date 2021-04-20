import React, { Component } from 'react';



class Login extends Component {

    render() {

        return(
            <div>
                <h2>Log into Happy Hours!</h2>

                <form onSubmit=''>
                    <section className='create'>

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

export default Login
import React, { Component } from 'react';
import AuthService from './Auth/AuthService';
import TokenService from './Auth/TokenService';
import { UserContext } from '../UserContext';



class Login extends Component {
    static contextType = UserContext

    state = {
        error: null,
        loggingIn: null,
        token: null,

    }

    

    loginSuccess = () => {
       
        
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/happyhours'
        history.push(destination)
    }

    submitAuthToken = e => {
        e.preventDefault();

        this.setState({
            error: null,
            LoggingIn: 'Logging In... Standby',
        });

        const { user_name, user_password } = e.target;


        AuthService.login({
            user_name: user_name.value,
            user_password: user_password.value
        })
        .then(res => {
            
            user_password.value = '';
            TokenService.saveToken(res.authToken);

            this.setState({
                token: res.authToken,
                userName: user_name.value,
                userid: res.userid,

            })
            AuthService.postLogin({
                usid: res.userid,
                token: res.authToken
            })
           
           
            const {setUserName, setUserToken, setUserId} = this.context
            
            setUserName(this.state.userName)
            
            setUserToken(this.state.token)
            
            setUserId(this.state.userid)

            
            this.loginSuccess();
        })
        .catch(res => {
            this.setState({
                error: res.error
            })
        })


    }


    render() {

        const { error, LoggingIn } = this.state;


        return(
            <div>
                
                <h2>Log into Happy Hours!</h2>
                <p>
                    {error} {LoggingIn}
                </p>

                <form onSubmit={this.submitAuthToken}>
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

                                

                            </div>
                            <div className='create-c'>
                                <button>Login</button>
                            </div>
                        </div>
                    </section>

                </form>
                
            </div>
        )
    }
}
Login.contextType = UserContext;

export default Login